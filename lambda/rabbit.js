exports.handler = function(event, context, callback) {
  const test = process.env.GOOGLE_SERVICE_ACCOUNT;
  callback(null, {
    statusCode: 200,
    body: "HERE IS STUFF" + test;
  });
};
