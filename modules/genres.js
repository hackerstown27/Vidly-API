const mongoose = require("mongoose");
const Joi = require("joi");

const genresSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 }
});

const Genre = mongoose.model("Genre", genresSchema);

function validate(genre) {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(genre, schema);
}


module.exports.Genre = Genre;
module.exports.validate = validate;