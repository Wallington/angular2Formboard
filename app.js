var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/app');
var cors = require('cors');

var app = express();

//we Whitelist website to access
var whiteList = 
[
    'localhost',
    'https://www.google.com'
];
var corsOptDelegatre = function (req, callback)
{
    var corsOpt;
    if(whiteList.indexOf(req.header('Origin')) !== -1)
    {
        corsOpt = { origin: true} //reflect (enable) the requset in the CORS response
    } else
    {
        corsOpt = { origin: false } //disable CORS for the request
    }

    callback(null, corsOpt); //callback expect two parameters: error and options
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    
    var allowedOrigins = ['https://google.com', 'http://localhost:4200'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    cors(corsOptDelegatre);
    console.log('headers');
    next();
}); 



app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
