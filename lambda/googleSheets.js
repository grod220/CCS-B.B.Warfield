// https://ccstockholm.netlify.com/.netlify/functions/googleSheets

const sampleFunc = () => {
  return new Promise((resolve, reject) => {
    reject("A simple no.");
  });
};

exports.handler = async function(event, context, callback) {
  try {
    const data = await sampleFunc();
    return { statusCode: 200, body: data };
  } catch (err) {
    throw new Error(err);
  }
};
