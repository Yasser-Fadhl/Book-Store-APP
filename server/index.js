const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const register = require("./Routes/Register");
const login = require("./Routes/login");
const addbooks = require("./Routes/addbooks");
const getbooks = require("./Routes/getbooks");
const router = express.Router();
// const userModel = require("./models/usermodel");

if (!config.get("jwtPrivateKey")) {
  console.error("Fatal Error:jwtPrivateKey is not defined");
  process.exit(1);
}

mongoose
  .connect(
    "mongodb+srv://YasserFadhl:yasoory1996@cluster0.feh0e.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("db"));

app.use(express.json());
app.use(cors());
app.use("/register", register);
app.use("/login", login);
app.use("/addbooks", addbooks);
app.use("/books", getbooks);
app.get("/getusers", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});
