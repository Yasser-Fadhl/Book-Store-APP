const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateUser(user) {
  let errors = {};
  user.email = !isEmpty(user.email) ? user.email : "";
  if (validator.isEmpty(user.email)) errors.email = "Add a valid email address";
  if (!validator.isEmail(user.email)) errors.email = "Add a valid Email Adress";

  user.firstName = !isEmpty(user.firstName) ? user.firstName : "";
  if (validator.isEmpty(user.firstName)) {
    errors.firstName = "Add your first name";
  }
  if (!validator.isLength(user.firstName, { min: 3, max: 50 })) {
    if (validator.isEmpty(user.firstName)) {
      errors.firstName = "Add your first name";
    } else {
      errors.firstName = "First name must be between 3 and 50 characters";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
