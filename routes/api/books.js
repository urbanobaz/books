const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Book');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', (req, res) => {
  Book.find()
    .sort({ rating: -1 })
    .then(books => res.json(books));
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

  newBook.save().then(book => res.json(book));
});

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Public
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;