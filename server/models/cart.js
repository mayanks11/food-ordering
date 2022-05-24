// import mongoose

const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    item:{
        type: String
        
    },
    price:{
        type: Number
    }

})

//export
module.exports = mongoose.model('CartItem', CartItemSchema);