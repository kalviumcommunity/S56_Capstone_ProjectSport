const mongoose = require("mongoose");
const joi = require("joi");

const sportSchema = new mongoose.Schema({
    Batch: {
        type: String,
        required: true
    },
    Sport: {
        type: String,
        required: true
    },
    Timing: {
        type: String,
        required: true
    }
});
const validateSport = (sport) => {
    const schema = joi.object({
        Batch: joi.string().required(),
        Sport: joi.string().required(),
        Timing: joi.string().required()
    });
    return schema.validate(sport);
};
const Mitsport = mongoose.model("sports", sportSchema);
module.exports = { Mitsport, validateSport };


