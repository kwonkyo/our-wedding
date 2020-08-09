# our-wedding-js

Is a React application I made to help our wedding guests view event details and RSVP online. It is a serverless website that communicates with DynamoDB via API Gateway. Its AWS backend stack is created using an infrastructure-as-code process with CloudFormation.

## Setup
A copy of this application is deployed via S3 Static Hosting here: http://our-wedding-js.s3-website.us-east-2.amazonaws.com.

There is also a CloudFormation template under `infrastructure/` for the backend stack creation.
Once a CloudFormation stack is created using this template, the value of its output `OurWeddingApiEndpoint` must be set under `REACT_APP_API_ENDPOINT` inside an `.env` file of the working directory during the build.

Then, you can build the application for static hosting:
```
$ npm run-script build
```

Or, to test the application in your local machine - just run:
```
$ npm start
```

## Samples
#### Home
<img src="public/readme/home.PNG"/><br/>

#### Details
<img src="public/readme/details.PNG"/>

#### RSVP Form
The RSVP component was by far the most time-consuming. The idea was that there would be a 1-to-1 mapping between a physical wedding invitation and a "family", and we would prepopulate each family's RSVP forms with some basic information (e.g. the invited members in the family and their age groups), which they can access via an invite ID (inserted in their wedding invitations). This was all done via an API Gateway interface to standard DynamoDB operations. Then all the guests have to do is make modifications to their existing RSVP forms.<br/><br/>
<img src="public/readme/rsvp-1.PNG"/>
<br/><br/>
<img src="public/readme/rsvp-2.PNG"/>
