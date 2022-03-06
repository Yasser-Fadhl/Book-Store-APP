const express = require("express");
const router = express.Router();
const user = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const Joi = require("joi");
const validateUser = require("../Validation/userValidation");
const passwordComplexity = require("joi-password-complexity");

router.post("/", async (req, res) => {
  try {
    // const { error } = validateUser(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    const label = "Password";
    const { error } = passwordComplexity(undefined, label).validate(
      req.body.password
    );
    if (error) return res.status(400).send(error.details[0].message);
    let nUser = await user.findOne({ email: req.body.email });
    if (nUser) return res.status(400).send("This User is already registered");
    else {
      const User = req.body;
      const salt = await bcrypt.genSalt(10);
      User.password = await bcrypt.hash(req.body.password, salt);
      const newUser = new user(User);
      const { errors, isValid } = validateUser(newUser);
      if (!isValid) {
        // for (key in errors) {
        throw new Error(JSON.stringify(errors));
        // }
        console.log(errors);
      }
      await newUser.save();
      const token = jwt.sign(
        _.pick(User, ["email", "firstName", "lastName"]),
        config.get("jwtPrivateKey")
      );
      res.send(token);
    }
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
