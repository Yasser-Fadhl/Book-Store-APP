const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
function validateUser(user) {
  const schema = {
    firstName: Joi.user.string().min(3).max(50),
    lastName: Joi.user.string().min(3).max(50),
    email: Joi.user.string().min(3).max(50).email(),
    birthday: Joi.user.date(),
    phone: Joi.user.number().min(10).max(15),
  };
  return Joi.validate(user, schema);
}
module.exports = validateUser;
