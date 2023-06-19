'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Books = require('./models/books.js');


/*
  name: { type: String, required: true },
  color: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  spayNeuter: { type: Boolean, required: true }
*/


async function seed() {

  await Cat.create({
    name: 'Ronald',
    color: 'orange tabby',
    age: 11,
    location: 'Seattle',
    spayNeuter: true
  });

  console.log('Ronald was created!');

  await Cat.create({
    name: 'Karl',
    color: 'black and grey tabby',
    age: 10,
    location: 'Rainbow bridge',
    spayNeuter: true
  });

  console.log('Karl was created');

  await Cat.create({
    name: 'Victor',
    color: 'black and grey tabby',
    age: 13,
    location: 'Rainbow bridge',
    spayNeuter: true
  });

  console.log('Victor was created');

  mongoose.disconnect();
}

seed();