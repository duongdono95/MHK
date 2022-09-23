const mongoose = require("mongoose");
// declare the schema (the structure of the document, which will be defined in the collection on mongo db)
const Schema = mongoose.Schema;

const productSchema = new Schema({
    sellerName: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: {
        userName: String,
        comment__conent: String,
    }
}, {timestamps: true});

// automatically looking for Products model in MHK collection in mongoDB
const Products = mongoose.model("Products", productSchema)
// export the model
module.exports = Products;