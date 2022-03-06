const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    minlength: 3,
    Required: true,
  },
  author: {
    type: String,
    minlength: 3,
    Required: true,
  },
  category: {
    type: [String],
    Required: true,
  },
  price: {
    type: Number,
    Required: true,
  },
  picture: {
    type: String,
    minlength: 7,
    Required: true,
  },
});
const Book = mongoose.model("Book", bookSchema, "Books");
module.exports = Book;
