const Joi = require('joi');

const itemSchema = Joi.object({
    shortDescription: Joi.string()
        .pattern(/^[\w\s\-]+$/)
        .required(),
    price: Joi.string()
        .pattern(/^\d+\.\d{2}$/)
        .required()
});

module.exports = itemSchema;
