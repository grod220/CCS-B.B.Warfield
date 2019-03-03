// https://ccstockholm.netlify.com/.netlify/functions/googleSheets

import { google } from 'googleapis'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const getClient = ({ scopes }) => {
  return google.auth.getClient({
    credentials: JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString(
        'ascii'
      )
    ),
    scopes: scopes,
  })
}

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const authorizeGmail = async () => {
  const client = await getClient({
    scopes: [
      'https://www.googleapis.com/auth/gmail.modify',
      'https://www.googleapis.com/auth/gmail.compose',
      'https://www.googleapis.com/auth/gmail.send',
    ],
  })
  return google.gmail({
    version: 'v1',
    auth: client,
  })
}

const encodeEmailMessage = email => {
  const subject = `New website signup: ${new Date().toLocaleDateString()}`
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`
  const messageParts = [
    'From: Mr. Robot <grod220@gmail.com>',
    `To: Gabe <grod220@gmail.com>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    'This is a message just to say hello.',
    `New email signed up: ${email}  🤘❤️😎`,
  ]
  const message = messageParts.join('\n')

  // The body needs to be base64url encoded.
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

const sendToJoe = email => {
  const sendmail = require('sendmail')()
  return new Promise((resolve, reject) => {
    sendmail(
      {
        from: 'robot@calvarystockholm.se',
        to: 'grod220@gmail.com',
        subject: `New email submitted: ${new Date().toLocaleDateString()}`,
        html: `Email submitted: <b>${email}</b>`,
      },
      function(err, reply) {
        if (err) {
          reject(err)
          console.log(err && err.stack)
        } else {
          resolve(reply)
          console.dir(reply)
        }
      }
    )
  })
  // const gmail = await authorizeGmail()
  // return gmail.users.messages.send({
  //   userId: 'me',
  //   requestBody: {
  //     raw: encodeEmailMessage(email),
  //   },
  // })
}

const addToCol = async (range, emailAddress) => {
  const sheets = await authorizeSheets()
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
    const sheetsRes = await addToCol('Local!F2', emailToSignup) // don't resolve though. Not going to fix if failure.
    // const emailResponse = await sendToJoe(emailToSignup)
    console.log(emailResponse)
    return {
      statusCode: sheetsRes.status,
      body: JSON.stringify(sheetsRes),
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
