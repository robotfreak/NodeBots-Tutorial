var express = require('express');
var mds = require('markdown-serve');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var intro = require('./routes/intro');
var jsprimer = require('./routes/jsprimer');
var eprimer = require('./routes/eprimer');
var displays = require('./routes/displays');
var sensors = require('./routes/sensors');
var actors = require('./routes/actors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/json', mds.middleware({
    rootDirectory: path.resolve(__dirname, 'public/content'),
}));

app.use(mds.middleware({ 
    rootDirectory: path.resolve(__dirname, 'public/content'),
    view: 'markdown'
}));

//app.use('/', routes);
//app.use('/intro', intro);
//app.use('/eprimer', eprimer);
//app.use('/jsprimer', jsprimer); 
//app.use('/displays', displays); 
//app.use('/sensors', sensors); 
//app.use('/actors', actors); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


module.exports = app;
