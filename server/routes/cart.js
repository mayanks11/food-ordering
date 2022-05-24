const router = require('express').Router();

const cartModel = require('../models/cart');

router.post('/api/cart', async (req, res) => {
    console.log('hello');
    try {
        const newItem = new cartModel({
             item: req.body.item,
             price: req.body.price
         })
         console.log(req.body);
        
        // save
        const save = await newItem.save()
        res.status(200).json("Item added");   
    } catch (error) {
        res.json(error);
    }
})

// Get Item
router.get('/api/carts', async (req, res) =>{
    try {
        const allCartItems = await cartModel.find({});
        res.status(200).json(allCartItems);
    } catch (error) {
        res.json(error);
    }
})
// Specific
router.get('/api/carts/:id', async (req, res) =>{
    try {
        const specificItem = await cartModel.findById(req.params.id);
        res.status(200).json(specificItem);
    } catch (error) {
        res.json(error);
    }
})

// Delete Item
router.delete('/api/cart/:id', async (req,res)=>{
    console.log(req.params.id);
    
    try {
        const deleteItem = await cartModel.findByIdAndRemove(req.params.id);
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error)
    }
})

// Delte all
router.delete('/api/empty',async (req, res)=>{
    try {
        const deleteAll = await cartModel.deleteMany(); 
        res.status(200).json('Items deleted');       
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;