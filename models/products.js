const mongoose = require('mongoose');

const products = new mongoose.Schema({
    id:{
        type: String,    //To support alphanumeric ids
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Products = mongoose.model('Products', products);
module.exports = Products;