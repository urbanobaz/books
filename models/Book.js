const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  pages: {
    type: Number
  },
  rating: {
    type: Number
  }
});

module.exports = Book = mongoose.model('book', BookSchema);