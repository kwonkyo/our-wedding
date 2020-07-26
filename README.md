# Welcome!

This is a React application I made for our wedding guests. It allows guests to view event details and RSVP online.

## Setup
This application is deployed via S3 Static Hosting here: http://our-wedding-js.s3-website.us-east-2.amazonaws.com/.

However, to test the the application in your local machine, just run:
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
The RSVP component was by far the most time-consuming. The idea was that there would be a 1-to-1 mapping between a physical wedding invitation and a "family", and we would prepopulate each family's RSVP forms with some basic information (e.g. the invited members in the family and their age groups), which they can access via an invite ID (inserted in their wedding invitations). This was all done via an API Gateway interface to standard DynamoDB operations. Then all the guests have to do is make modifications to their existing RSVP forms.<br/><br/>
<img src="readme/rsvp-1.PNG"/>
<br/><br/>
<img src="readme/rsvp-2.PNG"/>
