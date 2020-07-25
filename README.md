# Welcome!

This is a React application I made for our wedding guests. It allows guests to view event details and RSVP online.

## Setup
This application is designed to be integrated with any AWS account.
You need to provide your AWS credentials as environment variables by creating an `.env` file in the top-level directory with the following key value pairs:
```
REACT_APP_AWS_REGION = <aws-region>
REACT_APP_AWS_ACCESS_KEY_ID = <aws-access-key-id>
REACT_APP_AWS_SECRET_ACCESS_KEY = <aws-secret-access-key>
REACT_APP_AWS_DYNAMODB_RSVP_TABLE = <table-name>
```

To start the application, just run:
```
$ npm start
```