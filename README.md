# Nextjs serverless + aws lambda 🐑
A tiny example project using nextjs serverless and aws lambda.
***
### Setup
Install [Serverless](https://github.com/serverless/serverless), a framework that we can utilize to easily deploy to aws.
 ```sh
$ npm install -g serverless
```
It is assumed that you have an aws account setup, and the cli configured. You can utilize the free teir for aws lambda and this example. 
***
### Explanation
This example has 4 main steps:
1. **Configure nextjs to use its serverless mode**
This is the easy part. Just create a next.config.js file and set the target to 'serverless'. View the [nextjs docs](https://github.com/zeit/next.js/#serverless-deployment) on this for what this does.
2. **Create an express server that is wrapped with serverless-http**
Thanks to the [serverless-http](https://github.com/dougmoscrop/serverless-http) package, we can create a normal express server thats ready for aws lambda without any extra thought on our end. I made my server in lambda.js
3. **Define a serverless.yml that serves as a config file for our deployment**
The serverless.js file is our basic config file for our deployment that the serverless package utilizes. It includes some basic parameters like service name, runtime, region, environment variables, and also importantly our server handler.
At this point you can deploy using  
```sh $ sls deploy ```
4. **Serve our nextjs static files in s3**
Lastly we need to host our static files. This is very easy since everything is just inside an s3 bucket. Simply enter s3, and if you have deployed, you should have a newly created bucket. Navigate into the folders until you get to the staging name defined in serverless.yml, in this case production, and create a new folder called _next and navigate into the folder. Then simply upload the static folder that is created upon build time, it should be .next/static by default. This step should be automated in a real world scenario.