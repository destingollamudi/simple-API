const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//add authentication

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res)=>{
    res.send("Hello from Node API Server Updated");
});

mongoose.connect('mongodb+srv://admin:zKcfNdlbAaKDK9PX@backenddb.fnh0c.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected!')
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        })
    })
    .catch(() => { console.log('Connection failed') });