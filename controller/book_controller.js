const express = require("express");
const router = express.Router();
var app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

var db = require("../models/Book");

router.get('/api/books', function(req, res) {
db.Book.find({})
.then(function(dbBook){
   res.send(dbBook) 
})
.catch(function(error){
    res.json(error)
})});

router.post('/api/books', function(req, res) {
db.Book.create()
.then(function(dbBook){
    res.render()
})
.catch(function(error){
    res.json(error)
})
});

router.get('/api/books/:id', function(req, res) {
var id = req.params.id
db.Book.findOne({_id: id})
.then(function(dbBook){
   res.send(dbBook) 
})
.catch(function(error){
    res.json(error)
})});


module.exports = router
