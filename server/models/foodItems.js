// import mongoose

const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    item:{
        type: String
        
    },
    price:{
        type: Number
    }

})

//export
module.exports = mongoose.model('foodItem', FoodItemSchema);