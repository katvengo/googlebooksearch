var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({

title: {
    type: String,
},

authors:{
    type: String,
},

description: {
    type: String,
},

image: {
    type: String,
},

link: {
    type: String,
},

favorite: {
    type: Boolean,
    default: false,
  },

})

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;