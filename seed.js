'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Books = require('./models/books.js');



// title: { type: String, required: true },
//   description: { type: String, required: true },
//   status: { type: Boolean, required: true },
//   image: { type: String, required: true },
  


async function seed() {

  await Books.create({
    title: 'To Kill a Mockingbird',
    description: `Novel written by Harper Lee. The novel is set in the 1930s in Alabama. It follows the story of Scout Finch, a girl who learns about racial inequality and injustice through her father's defense of a black man wrongly accused of a crime.`,
    status: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/To_Kill_A_Mockingbird.jpg/900px-To_Kill_A_Mockingbird.jpg?20210515132907',
  });

  console.log('Book1 was created!');

  await Books.create({
    title: 'The Great Gatsby',
    description: `A 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`,
    status: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
  });

  console.log('Book2 was created');

  await Books.create({
    title: 'The Hobbit',
    description: `The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and thirteen dwarves that make up Thorin Oakenshield's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug. Bilbo's journey takes him from his peaceful rural surroundings into more sinister territory`,
    status: true,
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
  });

  console.log('Book3 was created');

  mongoose.disconnect();
}

seed();