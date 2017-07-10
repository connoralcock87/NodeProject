var express = require('express')
var server = express()
var name = require('./name.json')

server.get('/', function (request, response) {
  response.send("Please specify pathway in more detail");
});

server.get('/name', function (request, response) {
  response.send(name);
});

server.get('/contact', function (request, response) {
  response.send(name.contact);
});

server.get('*', function (request, response) {
  response.status(400)
  response.send("Invalid");
});

server.listen(process.env.PORT || 5000)
