const mongoose = require('mongoose');
const { db } = require('../models/foodItems');

const DbConncetion = ()=>{
    const db = mongoose.createConnection("mongodb+srv://mayank11:admin1234@food.hfidj.mongodb.net/?retryWrites=true&w=majority");

    db.on("error", console.error.bind(console, "MongoDB Connection Error>> : "));
    db.once("open", function() {
        console.log("client MongoDB Connection ok!");
      });
      require('../models/foodItems')

      return db;
}

module.exports = {
    DbConncetion
};