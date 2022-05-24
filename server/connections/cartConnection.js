const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb+srv://mayank:admin1234@cart.gv2wn.mongodb.net/?retryWrites=true&w=majority');
conn.model('cart', require('../models/cart'));

module.exports = conn;

