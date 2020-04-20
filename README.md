# S3 Pre-signed URLs from Lambda using Serverless

Generate S3 pre-signed URLs for uploading files from AWS Lambda using Serverless Framework.

_No setup required, just deploy using serverless._

The generated signed URL from the lambda can be used to upload files from the browser using a PUT.

**Includes:**

- Creates a Lambda Function with IAM Role to allow `s3:PutObject`
- Sets up API gateway for `GET /signed-upload-url`
- Generates S3 Bucket with correct CORS and policy for public reads `s3:GetObject`

**How to deploy:**

1. Install Serverless Framework

```
npm i -g serverless
```

2. Deploy using:

```
serverless deploy
```

3. Visit lambda url and get signed upload url:

```
https://yourlamdba.execute-api.us-east-1.amazonaws.com/dev/signed-upload-url
```

4. Test your signed url using `curl` to upload a file

```
curl --upload-file ~/Desktop/test.png https://your-s3-bucket.s3.amazonaws.com/test.png?AWSAccessKeyId=ASIAJFHAKGG77U4KC&Expires=1587360000&Signature=cHAGKh3hHFASncccMQ2kgI=
```

5. View/Download uploaded file:

```
https://your-s3-bucket.s3.amazonaws.com/test.png
```
