const db = require("../models")

module.exports = {
create: function(req, res){
  console.log('in server:', req.body)
    db.Book
       .create(req.body)
       .then(dbBook => res.json(dbBook))
       .catch(err => res.status(422).json(err))
},
findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Book
      .find({favorite: true})
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
}