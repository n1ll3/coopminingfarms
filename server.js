// # --------
// var app = require('express')();
// const https         = require('https'),
//       fs            = require('fs'),
//       port          = 3000;
//
// if(app.get('env') === 'development') {
//
//     console.log('dev env!!'); //prints correctly
//     console.log('port: ' + port); //prints correctly
//     const options = {
//         key: fs.readFileSync('/tmp/private.key'),
//         cert: fs.readFileSync('/tmp/publickey.crt')
//     };
//
//     https.createServer(options, (req, res) => {
//
//         console.log('https good to go'); //this does message appears!!! ^_^
//
//     }).listen(port);
//
// }
