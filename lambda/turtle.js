var _ = require('lodash');

exports.handler = async function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "turtle"
  });
};
