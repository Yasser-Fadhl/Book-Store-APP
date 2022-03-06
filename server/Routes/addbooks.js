const express = require("express");
const router = express.Router();
const validateBook = require("../Validation/validateBook");
const Book = require("../models/bookModel");
const Joi = require("@hapi/joi");
router.post("/", async (req, res) => {
  let newBook = await Book.findOne({
    bookName: req.body.bookName,
    author: req.body.author,
  });
  if (newBook) return res.status(400).send("Already added");
  else {
    newBook = new Book(req.body);
    // if (error) return res.status(400).send(error.errors.message);
    // console.log(error);
    try {
      const { isValid, Errs } = validateBook(newBook);
      if (!isValid) {
        throw new Error(JSON.stringify(Errs));
      }
      await newBook.save();
      res.send(newBook);
    } catch (err) {
      console.log(err.message);

      res.status(405).send(err.message);
    }
  }
});
// function validateBook(book) {
//   const schema = Joi.object().keys({
//     bookName: Joi.string().min(5).max(10).required(),
//     author: Joi.string().min(5).max(10).required(),
//     price: Joi.number(),
//   });
//   return Joi.validate(
//     book,
//     schema

//     //   (err, result) => {
//     //   if (err) {
//     //     console.log(err);
//     //     res.send("an error has occurred");
//     //   } else {
//     //     console.log(result);
//     //     res.send("successfully posted data");
//     //   }
//     // }
//   );
// }
module.exports = router;
