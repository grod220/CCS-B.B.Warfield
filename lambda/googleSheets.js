// https://ccstockholm.netlify.com/.netlify/functions/googleSheets

import { google } from "googleapis";

const authorize = async base64Keys => {
  const client = await google.auth.getClient({
    credentials: JSON.parse(
      Buffer.from(base64Keys, "base64").toString(
        "ascii"
      )
    ),
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });
  return google.sheets({
    version: "v4",
    auth: client
  });
};

const addToCol = (sheets, range, emailAddress) => {
  return sheets.spreadsheets.values.append({
    spreadsheetId: "1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88",
    range,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[emailAddress]]
    }
  });
};

// TO DO: get the post obj w/ email
exports.handler = async function(event, context, callback) {
  return { statusCode: 200, body: JSON.stringify(process.env) }
  try {
    const sheets = await authorize(process.env.GOOGLE_SERVICE_ACCOUNT);
    const res = await addToCol(
      sheets,
      "Sheet3!A1:C2",
      JSON.parse(event.body).email
    );
    return { statusCode: res.status, body: JSON.stringify(res.data) };
  } catch (err) {
    return { statusCode: 500, body: err };
  }
};
