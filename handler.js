const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.signedUrl = async event => {
  try {
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property
    const url = await s3.getSignedUrlPromise('putObject', {
      Bucket: process.env.S3_BUCKET,
      Key: 'test-file.jpg', // File name could come from queryParameters
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'AWS S3 Pre-signed urls generated successfully.',
        url,
      }),
    };
  } catch (err) {
    console.log('Error getting presigned url from AWS S3:', err);
    return {
      statusCode: err.statusCode || 502,
      body: JSON.stringify({
        success: false,
        message: 'Pre-Signed URL error',
        err,
      }),
    };
  }
};
