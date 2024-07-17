const Joi = require('joi');
const itemSchema = require('./itemSchema.js');

const receiptSchema = Joi.object({
    id: Joi.string()
    .guid({ version: 'uuidv4' }),
    retailer: Joi.string()
        .pattern(/^[\w\s\-&]+$/)
        .required(),
    purchaseDate: Joi.string()
        .isoDate()
        .required(),
    purchaseTime: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required(),
    items: Joi.array()
        .items(itemSchema)
        .min(1)
        .required(),
    total: Joi.string()
        .pattern(/^\d+\.\d{2}$/)
        .required()
});

module.exports = receiptSchema;
