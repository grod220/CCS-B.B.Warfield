// https://ccstockholm.netlify.com/.netlify/functions/googleSheets

import { google } from 'googleapis'

const getClient = async (base64Keys, scopes) => {
  return await google.auth.getClient({
    credentials: JSON.parse(
      Buffer.from(base64Keys, 'base64').toString('ascii')
    ),
    scopes: scopes,
  })
}

const authorizeSheets = base64Keys => {
  const client = getClient(base64Keys, [
    'https://www.googleapis.com/auth/spreadsheets',
  ])
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const authorizeGmail = base64Keys => {
  const client = getClient(base64Keys, [
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send',
  ])
  return google.gmail({
    version: 'v1',
    auth: client,
  })
}

const sendToJoe = email => {
  const subject = `New website signup: ${(new Date()).toLocaleDateString()}`;
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    'From: Mr. Robot <robot@robot.com>',
    `To: Gabe <${email}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    'This is a message just to say hello.',
    'So... <b>Hello!</b>  🤘❤️😎',
  ];
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });
  console.log(res.data);
  return res.data;
}

const addToCol = (sheets, range, emailAddress) => {
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: '1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88',
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[emailAddress]],
        },
      },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}

exports.handler = async function(event, context, callback) {
  try {
    const emailToSignup = JSON.parse(event.body).email
    const sheets = await authorizeSheets(process.env.GOOGLE_SERVICE_ACCOUNT)
    const res = await addToCol(sheets, 'Local!F2', emailToSignup)
    // const emailResponse = await sendToJoe(emailToSignup)
    return { statusCode: res.status, body: JSON.stringify(res.data) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
