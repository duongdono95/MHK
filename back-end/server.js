const express = require("express");
const cors = require ("cors");
const fs = require("fs");
const app = express();


app.use(cors());
app.use(express.json());


// get method



// post method



// delete method



// put method






// mongoose
mongoose.connect(
    mongoDB, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log("connection attempted")}
);

const db = mongoose.connection;



// listen on local host
app.listen(3000, () => {
    console.log("listening ...")
})