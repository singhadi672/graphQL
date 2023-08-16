const mongoose = require("mongoose");


const CuisinesSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    description: { type: String },
})

const Cuisines = mongoose.model("Cuisine", CuisinesSchema)

module.exports = { Cuisines }