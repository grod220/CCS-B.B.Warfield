exports.handler = async function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: process.env.GOOGLE_SERVICE_ACCOUNT
  });
};
