var express = require('express');
var app = express();
var server = app.listen(3000);
var randomstring = require("randomstring");
var robot = require("robotjs");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var fs = require('fs');
var os = require('os');
//var io = require('socket.io')(http);
var register = require("./models/database");
// var reg = new register();
// reg.username="venkay";
// reg.password="123";
// reg.confirmpassword="123";
// reg.save(function(err,data){
//     console.log(data);
// });
// register.find({},function(err,data){
//   console.log(data);
// });

// var http = require('http');
var io = require("socket.io")(server);

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        if (msg.mesg == "screenshot") {
            var screenshotname = randomstring.generate(10)
            robot.setKeyboardDelay(2000);
            robot.keyTap("printscreen");
            robot.setKeyboardDelay(2000);
            robot.typeString(screenshotname);
            robot.setKeyboardDelay(2000);
            robot.keyTap("enter");
            robot.setKeyboardDelay(2000);
            imgpath = os.homedir() + "/Pictures/" + screenshotname + ".png";
            imgbytes = fs.readFileSync(imgpath);
            imgbytes = imgbytes.toString('base64');
            io.emit('screenshot', {imgdata:imgbytes,myname:msg.myname});
        } else if (msg.mesg == "shutdown") {
            var exec = require('child_process').exec;
            var cmd = 'shutdown now';
            exec(cmd, function(error, stdout, stderr) {
                // command output is in stdout
                if (error)
                    console.log("error occured");
            });
        } else
            io.emit('chat message', msg);
    });
});
var routes = require('./routes/index');
var register = require('./routes/register');
var about = require('./routes/about');
var request = require('./routes/request');
var contact = require('./routes/contact');






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', routes);
app.use('/register', register);
app.use('/about', about);
app.use('/contact', contact);
app.use('/request', request);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
    console.log(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var test = require('./public/javascripts/test');

module.exports = app;
