const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');

const PORT = 8080;

app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/static',express.static(path.join(__dirname, 'static')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', function(req, res, err) {
    res.render('index', {
        title: "COOP MINING FARMS"
    })

    if ( err == true ) {
        console.log(err.message);
    }
});


app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT: ' + PORT);
}) 
