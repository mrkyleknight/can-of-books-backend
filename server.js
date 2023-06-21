'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/books');

const app = express();
app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let allBooks = await Books.find({});
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
}

app.post('/books', createBook);

async function createBook(request, response, next) {
  try {
    const { title, author, genre } = request.body;
    const newBook = new Books({ title, author, genre });
    const savedBook = await newBook.save();
    response.status(201).json(savedBook);
  } catch (error) {
    next(error);
  }
}

app.put('/books/:id', updateBook);

async function updateBook(request, response, next) {
  try {
    const bookId = request.params.id;
    const { title, author, genre } = request.body;
    const updatedBook = await Books.findByIdAndUpdate(bookId, { title, author, genre }, { new: true });
    response.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
}

app.delete('/books/:id', deleteBook);

async function deleteBook(request, response, next) {
  try {
    const bookId = request.params.id;
    await Books.findByIdAndDelete(bookId);
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));


async function clear() {
  try {
    await Books.deleteMany({});
    console.log('Books cleared from the DB');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
}


