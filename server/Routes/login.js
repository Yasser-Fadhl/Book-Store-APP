const express = require("express");
const router = express.Router();
const user = require("../models/usersModel");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const logUser = await user.findOne({ email: req.body.email });
  if (!logUser) return res.status(400).send("Invalid email or password");
  console.log(logUser, req.body.password);
  const result = await bcrypt.compare(req.body.password, logUser.password);
  console.log(result);
  if (!result) return res.status(403).send("invalid");
  res.send(logUser);
});
module.exports = router;
