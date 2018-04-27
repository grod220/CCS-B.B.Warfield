"use strict";

const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

function getCredentials() {
  const filePath = path.join(__dirname, "keys.json");
  if (fs.existsSync(filePath)) {
    return require(filePath);
  }
  if (process.env.CREDENTIALS) {
    return JSON.parse(process.env.CREDENTIALS);
  }
  throw new Error("Unable to load credentials");
}

async function getFiles() {
  const credentials = getCredentials();
  const client = await google.auth.getClient({
    credentials,
    scopes: "https://www.googleapis.com/auth/drive.readonly"
  });
  const drive = google.drive({
    version: "v2",
    auth: client
  });
  return drive.files.list();
}

exports.handler = function(event, context, callback) {
//   console.log("DATE! " + new Date());
//   getFiles()
//     .then(res => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(res.data)
//       });
//     })
//     .catch(e => {
//       callback(e);
//     });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ foo: 'bar' })
  });
};
