// Initializing express 
var express = require('express');
var app = express();
var server = app.listen(3000);
// initalizing completed

// including path
var path = require('path');


// Setting app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//move to index.js page in routes
var index = require('./routes/index');
app.use('/index',index);
app.use('/',index);

//Runs for static pages like javascript,css
app.use(express.static(path.join(__dirname, 'public')));
