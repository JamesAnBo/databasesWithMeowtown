var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./knexfile').development
var knex = require('knex')(config)
var index = require('./index')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

var catsObj = {
 cats: [
  {id: 1, name: 'fluffy'},
  {id: 2, name: 'tick'}
 ]
}

app.get('/', function(req, res) {
 res.redirect('/cats') // what is this doing?
})

app.get('/cats', function(req, res) {
  return knex('Cats')
    .select()
    .then(function(data){
      res.send(data)
    })
    .catch(function(err){
      console.error(err.message);
      res.status(500).send("Couldn't show you the cats!")
    })
})

app.get('/test', function(req, res){
  index.OwnCats()
  .then(function(cats){
      res.send(cats)
  })
  .catch(function(err){
    console.error(err.message);
    res.status(500).send("Couldn't show you the test!")
  })
})

app.get('/cats/new', function(req, res) {
 res.render('catsNew')
})

app.get('/cats/:id', function(req,res){
  console.log(req.params); // try going to /cats/1
})

app.post('/cats', function(req,res) {
  console.log(req.body);
})

module.exports = app;
