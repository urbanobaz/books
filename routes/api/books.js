const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Book');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', (req, res) => {
  Book.find()
    .sort({ rating: 1 })
    .then(items => res.json(items))
});

// @route   POST api/books
// @desc    Create a book
// @access  Public
router.post('/', (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages,
    rating: req.body.rating
  });

  newBook.save().then(item => res.json(item));
});

module.exports = router;