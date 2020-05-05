const mongoose = require("mongoose");
const Joi = require("joi");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true },
    numberInStock: { type: Number, required: true },
    dailyRentalRate: { type: Number, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

function validate(movie) {
    const schema = {
        title: Joi.string().minlength(3).required(),
        genre: Joi.required(),
        numberInStock: Joi.number().required(),
        dailyRentalRate: Joi.number().required(),
    };
    return Joi.validate(movie, schema);
}

module.exports.Movie = Movie;
module.exports.validate = validate;
