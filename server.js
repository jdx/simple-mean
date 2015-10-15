'use strict';

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

let Todo = mongoose.model('Todo', {title: String});

let express = require('express');
let app     = express();

app.get('/', function (req, res) {
  // render out the angular bootstrap page
  res.render('index.html.ejs');
});

app.use(require('body-parser').json());

app.get('/api/todos', function (req, res, next) {
  Todo.find()
  .exec(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

app.post('/api/todos', function (req, res, next) {
  let todo = new Todo({title: req.body.title});
  todo.save(function (err) {
    if (err) return next(err);
    res.sendStatus(201);
    console.log(`added ${todo.title}`);
  });
});

app.delete('/api/todos/:id', function (req, res, next) {
  Todo.find(req.params.id, function (err, todo) {
    if (err) return next(err);
    res.sendStatus(200);
  });
});

app.use(express.static('public'));

// listen on $PORT or 3000
// this makes the app work on heroku
app.listen(process.env.PORT || 3000);
