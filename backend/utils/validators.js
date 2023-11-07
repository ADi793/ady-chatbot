const Joi = require("joi");

const validateUser = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().min(5).max(255).required(),
});

module.exports.validateUser = validateUser;
