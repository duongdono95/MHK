const express = require("express");
const cors = require ("cors");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');



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
app.get("/keyboards", async (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

// app.get("/", (req, res) => {
//     const id = req.params.id;
//     Product.findById(id, (err, todo) =>{
//         res.json(todo);
//     });
//   });
// post method



// delete method



// put method






// mongoose



// listen on local host
