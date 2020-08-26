// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

//connecting to the mongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("successfully connected");
});

//define kitty class & schema
const BookSchema = new mongoose.Schema({
    isbn: Number,
    name: String,
    price: Number
  });
const Book = mongoose.model('Book', BookSchema);

const book1 = new Book({name:'book 1',isbn: 1234567890123,price:10.5});
console.log(book1.name);