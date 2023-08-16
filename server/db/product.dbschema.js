const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: String },
    rating: { type: Number },
    available: { type: Boolean },
    category: { type: String },
    type: { type: String }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = { Product }