const mongoose = require("mongoose");
const Joi = require("joi");

const sportSchema = new mongoose.Schema({
    Batch: { type: String, required: true },
    Sport: { type: String, required: true },
    Timing: { type: String, required: true }
});

const mitsport = (sport) => {
    const schema = Joi.object({
        Batch: Joi.string().required(),
        Sport: Joi.string().required(),
        Timing: Joi.string().required()
    });
    return schema.validate(sport);
};

// Define the model
const Mitsport = mongoose.model("sports", sportSchema);

// Export the model and validation function
module.exports = { Mitsport, mitsport };
