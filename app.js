var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API's
var mongoose = require('mongoose')
//connection
mongoose.connect('mongodb://localhost:27017/booker', { useMongoClient: true })

// importing our model
var Books = require('./models/books.js')

// post a book

app.post('/books', function (req, res) {
  // I thing the request will be an array
  var book = req.body;

  Books.create(book, function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books)
  })

});

// get all books

app.get('/books', function(req, res) {
  Books.find(function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books)
  })

});

// delete a book

app.delete('/books/:_id', function(req, res) {
  var query = {_id: req.params._id};

  Books.remove(query, function(err, book) {
    if (err) {
      console.log('err'+ err)
      throw err;
    }
    res.send(book)
  });

}); 

// update for example not using in App
app.put('/books/:_id', function(req, res){
  // client is sending the updated object
  var query = req.params._id
  var book = req.body
  var update = {
    '$set': {
    title: book.title,
    images: book.images,
    price: book.price
    }
  }

  // options returns updated object
  var options = {new: true}

  Books.findOneAndUpdate(query, update, options, function(err, upbook){
    if(err) {
      throw err;
    }
    res.json(upbook)
  });

});

// END API

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
