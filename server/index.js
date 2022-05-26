const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser=require('body-parser')
const cors = require('cors');



const app = express();

//Using express.json() to get data
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.use(express.json());
const Food = require('./models/foodItems');
const Cart = require('./models/cart');

//PORT
const PORT = process.env.PORT || 4000;

// import routes

const FoodItemRoute = require('./routes/foodItems');
const cartRoute = require('./routes/cart');


app.use(cors({origin: '*'}))
// Connect to mongoDB
 mongoose.connect('mongodb+srv://mayank11:admin1234@food.hfidj.mongodb.net/?retryWrites=true&w=majority')
 .then(()=> console.log("Item Database connected"))
 .catch(err => console.log(err));

 mongoose.createConnection('mongodb+srv://mayank:admin1234@cart.gv2wn.mongodb.net/?retryWrites=true&w=majority');
 console.log('Cart Database connected');





app.use('/', FoodItemRoute);
app.use('/', cartRoute);


//Connect to server
app.listen(PORT, ()=>console.log("Connected to server"));
 