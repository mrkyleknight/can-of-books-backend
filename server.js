'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/books');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', getBooks);

async function getBooks(request, response, next){
  try {
    // TODO: GET ALL CATS FROM THE DB
    let allBooks = await Books.find({});
    // TODO: SEND THOSE CATS ON THE RESPONSE
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
};


mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));