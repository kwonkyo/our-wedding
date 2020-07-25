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

## Samples
#### Home
We had a photographer friend who took our photos throughout our engagement and wedding preparation period, some of which I used as the website background. The website is fully compatible for both desktop and mobile devices. The desktop background is actually two separate photos aligned side-by-side, with a sloppy attempt to make it look like one photo.<br/><br/>
<img src="readme/home.PNG"/>
<img src="readme/home-m.PNG"/>

#### Details
Our wedding was planned for October 2020 (remember COVID-19?), so there was a great deal of uncertainty on whether or not we would actually be able host in this beautiful Edmonton hotel. Fortunately, we made arrangements with the hotel to continue the arrangement in a smaller capacity with social distancing measures.<br/><br/>
<img src="readme/details.PNG"/>

#### RSVP Form
The RSVP component was by far the most time-consuming. The idea was that there would be a 1-to-1 mapping between a physical wedding invitation and a "family", and we would prepopulate each family's RSVP forms with some basic information (e.g. the invited members in the family and their age groups), which they can access via an invite ID (inserted in their wedding invitations). This was all done with a DynamoDB database backend. Then all the guests have to do is make modifications to their existing RSVP forms.<br/><br/>
<img src="readme/rsvp-1.PNG"/>
<br/><br/>
<img src="readme/rsvp-2.PNG"/>
