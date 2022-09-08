const express = require("express");
const cors = require ("cors");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
// import the model from ./models/product.js
const Product = require ('./models/product')


app.use(cors());
app.use(express.json());
// connect to mongodb
const dbURI = 'mongodb+srv://duongdono:22051995@duongdono.xr4i0nh.mongodb.net/mhk?retryWrites=true&w=majority'
// connect argument to mongodb
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, () => { console.log("listening ...")}) )
    .catch((err) => console.log(err));

// checking the connection works or not
mongoose.connection.on('connected', () => {
    console.log('successfully connected')
})
// get method
app.get('/listings',(req, res) => {
    const listingProducts = new Product({
        sellerName: 'Duong',
        productName: 'Headphones 1',
        brand: 'Apple',
        photoUrl: 'http://',
        condition: 'New',
        
    });
} )


// post method



// delete method



// put method






// mongoose



// listen on local host
