exports.handler = async function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(process.env)
  });
};
