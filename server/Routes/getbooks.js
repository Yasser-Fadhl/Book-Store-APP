const Book = require("../models/bookModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find({});
  res.send(books);
});
router.get("/novels", async (req, res) => {
  const books = await Book.find({ category: ["Novels"] });

  res.send(books);
});
router.get("/science", async (req, res) => {
  const books = await Book.find({ category: ["Science"] });
  res.send(books);
});
router.get("/children", async (req, res) => {
  const books = await Book.find({ category: ["Children"] });
  res.send(books);
});
module.exports = router;
