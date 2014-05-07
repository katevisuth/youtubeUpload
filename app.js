var express = require('express');
// the request library will be used to query CouchDB
var Request = require('request');
// Just like on the client side.
var _ = require('underscore');

var bodyParser = require('body-parser'); // you must do: "npm install --save body-parser" in your terminal

var app = express();

// The username you use to log in to cloudant.com
var CLOUDANT_USERNAME="katevisuth";
// The name of your database
var CLOUDANT_DATABASE="artchannel";
// These two are generated from your Cloudant dashboard of the above database.
var CLOUDANT_KEY="mayeartingstitagentsequi";
var CLOUDANT_PASSWORD="s8pNijPhxJqteitW3RJj2u1x";

var CLOUDANT_URL = "https://" + CLOUDANT_USERNAME + ".cloudant.com/" + CLOUDANT_DATABASE

app.use(bodyParser());


// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(app.router);
app.use(express.urlencoded());

// Set up Express error handling
app.use(express.errorHandler());

app.get("/", function(request, response) {
  response.render('index');
});

app.post('/upload_video_id', function(request, response){
  // console.log("test!", request.body);

  var videoId = request.body.videoId;
  console.log('videoId',videoId);

  Request.post({
    url: CLOUDANT_URL,
    auth: {
      user: CLOUDANT_KEY,
      pass: CLOUDANT_PASSWORD
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({videoId:videoId, date: new Date()})
  }, function (err, res, body) {
    console.log('response',body);
    response.json(JSON.parse(body))
  });
});


app.use(express.logger('dev'));

app.listen(process.env.PORT || 3000);
console.log('Express started on port 3000');