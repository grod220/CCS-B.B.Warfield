const { google } = require("googleapis");
exports.handler = async function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "duck"
  });
};
