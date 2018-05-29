var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');

var Newsletter = require('./public/models/Newsletter');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detinationsRouter = require('./routes/destinations');
var signupRouter = require('./routes/signup');


mongoose.connect('mongodb://jltravel:jltravel@ds137600.mlab.com:37600/travelsite');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/destinations', detinationsRouter);
app.use('/newsletter', signupRouter);

app.post('/newsletters', function(req, res){
    
  var newsletter = new Newsletter();
  newsletter.firstName = req.body.firstName;
  newsletter.lastName = req.body.lastName;
  newsletter.email = req.body.email;
  

  newsletter.save(function (error){
      if (error)
          res.send(error);

      res.json(
          {
              message: 'Contact saved!',
              post: newsletter
          }
      );
  });

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
