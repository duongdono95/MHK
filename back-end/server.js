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
app.get("/all-listings", (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});
// get method for myProfile
// app.get("/all-listings", (req, res) => {
//     Product.filter({sellerName : "DuongDono" })
//     .then((result) => {
//         console.log(result)
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// });
app.get("/MyProfile", (req, res) => {
    Product.find({sellerName : "DuongDono" }, (error, results) => {
        console.log(results);
        res.json(results)
    })
});

app.get("/single-product", (req, res) => {
    const id = req.params.id;

    Product.findById(id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

// Post
app.post('/listings', (req, res) => {
    const listingProduct = new Product(req.body)
    console.log(listingProduct)
    listingProduct.save()
        .then((result)  => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
} )






// delete method
app.delete("/MyProfile/:id", (req, res) => {
    const id = req.params.id;

    Product.findByIdAndDelete(id)
    .then(result => {
     res.json({redirect: '/MyProfile'})   
    })
    .catch(err => {
        console.log(err);
    })
  });


// put method