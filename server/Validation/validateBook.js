const validator = require("validator");
const Book = require("../models/bookModel");
const isEmpty = require("./isEmpty");
module.exports = function validateBook(book) {
  let Errs = {};
  book.bookName = !isEmpty(book.bookName) ? book.bookName : "";
  if (validator.isEmpty(book.bookName)) Errs.bookName = "Add a valid Book name";
  else if (!validator.isLength(book.bookName, { min: 3, max: 100 }))
    Errs.bookName = "Book name Shoud be between 3 to 100 characters";

  book.author = !isEmpty(book.author) ? book.author : "";
  if (validator.isEmpty(book.author)) Errs.author = "Add a valid author name";
  else if (!validator.isLength(book.author, { min: 3, max: 100 }))
    Errs.author = "Author name Shoud be between 3 to 100 characters";
  return {
    isValid: isEmpty(Errs),
    Errs,
  };
};
