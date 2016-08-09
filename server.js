var AWS = require('aws-sdk');
var express = require('express');
var Index = require('./src/index');

AWS.config.update({region: "us-west-1",endpoint: "https://dynamodb.us-west-1.amazonaws.com"});

var app = express();
var docClient = new AWS.DynamoDB.DocumentClient();

app.get('/ping', Index.ping);
app.get('/index', Index.summaryIndex);
app.get('/code/:sec/:ques', Index.sort);

app.set('json spaces', 2);
app.listen(3000);
