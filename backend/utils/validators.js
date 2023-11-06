const Joi = require("joi");

const validateUser = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().min(5).max(255).required(),
});

console.log(validateUser.validate({ name: "a" }).error.details);

module.exports.validateUser = validateUser;
