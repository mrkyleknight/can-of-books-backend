'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const booksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
  image: { type: String, required: true },
});

const books = mongoose.model('books', booksSchema);

module.exports = Books;