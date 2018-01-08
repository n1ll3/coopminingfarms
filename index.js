#!/usr/bin/env nodejs
// # :::=DEPENDENCIES=:::
const express = require('express');
const app     = express();
const router  = express.Router();
const http    = require('http');

const PORT = 3000;

const config = require('./config.js');
module.exports = 'config.js'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.render('index', {
      title: 'Coopminingfarms'
  });
  //res.end('Hello World\n');
}).listen(8080, /*APP_PRIVATE_IP_ADDRESS*/'localhost');
console.log('Server running at http://localhost:8080/');

module.exports = router;
