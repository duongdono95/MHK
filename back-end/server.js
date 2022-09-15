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
// get method for all Listing
app.get("/all-listings", (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get("/all-listings/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
    Product.findById(id)
        .then (result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

app.get("/keyboards", (req, res) => {
    Product.find({category : "keyboard" }, (error, results) => {
        // console.log(results);
        res.json(results)
    })
});
app.get("/mouse", (req, res) => {
    Product.find({category : "mouse" }, (error, results) => {
        // console.log(results);
        res.json(results)
    })
});
app.get("/headphone", (req, res) => {
    Product.find({category : "headphone" }, (error, results) => {
        // console.log(results);
        res.json(results)
    })
});


//get method for myprofile
app.get("/MyProfile", (req, res) => {
    Product.find({sellerName : "DuongDono" }, (error, results) => {
        // console.log(results);
        res.json(results)
    })
});
//get method for edit page
app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
    Product.findById(id)
        .then (result => {
            res.json(result)  
        })
        .catch((err) => {
            console.log(err);
        })
})

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

//Put for Edit page
app.put('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    Product.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            productName: req.body.productName,
            brand: req.body.brand,
            photoUrl: req.body.photoUrl,
            condition: req.body.condition,
            category: req.body.category,
            stock: req.body.stock,
            price: req.body.price,
            description: req.body.description
        }
    })
    .then(result => {
        res.status(200).json({
            updated_product: result,
        })
    })
    .catch(err => {
        console.log(err);
    })
})

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