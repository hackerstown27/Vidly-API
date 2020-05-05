const mongoose = require("mongoose");
const Joi = require("joi");

customerSchema = new mongoose.Schema({
    isGold: { type: Boolean, default: false, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);

function validate(genre) {
    const schema = {
        isGold: Joi.boolean().required(),
        name: Joi.string().required(),
        phone: Joi.number().required().min(10).max(10),
    };
    return Joi.validate(genre, schema);
}

module.exports.Customer = Customer;
module.exports.validate = validate;
