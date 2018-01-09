// # --------
// # :::=DEPENDENCIES=:::
/*
const express      = require('express');
const app          = express();
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const pug          = require('pug');

//const routes = require('./views/index');
//const about = require('./routes/about');

// # view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// # app use config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/static', express.static(path.join(__dirname, 'static')));
//app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', function(res, req, next, err) {
    res.render('index.pug', {
        title: "Coop Mining Farms"
    });

    console.log(err.message);
});

//app.use('/', routes);
//app.use('/about', about);

// # catch 404 and forward to error handler
app.use(function( req, res, next ) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

// #_ error handlers

// #__ development error handlers
// #____ this line will print stacktrace
if ( app.get('env') === 'development' ) {
    app.use(function( err, req, res, next ) {
        res.status( err.status || 500 );
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

const PORT = 3000;

app.listen(PORT, function(res, req, next, err) {
    console.log("SERVER RUNNING PORT: " + PORT);
})*/
/*

#!/usr/bin/env nodejs
// # :::=DEPENDENCIES=:::
/*
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
}).listen(8080, /*APP_PRIVATE_IP_ADDRESS*//*'localhost');
console.log('Server running at http://localhost:8080/');

module.exports = router;
*/
