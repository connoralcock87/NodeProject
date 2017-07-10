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

server.get('*', function (request, error) {
  response.status(400)
  response.send("Invalid");
});

server.listen(3000);
