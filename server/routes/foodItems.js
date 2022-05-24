const router = require('express').Router();

const foodItemModel = require('../models/foodItems');

// Insert Item

router.post('/api/item', async (req, res) => {
    console.log('hello');
    try {
        const newItem = new foodItemModel({
             item: req.body.item,
             price: req.body.price
         })
         console.log(req.body);
        
        // save
        const save = await newItem.save()
        res.status(200).json('Item added');   
    } catch (error) {
        res.json(error);
    }
})

// Get Item
router.get('/api/items', async (req, res) =>{
    try {
        const allFoodItems = await foodItemModel.find({});
        res.status(200).json(allFoodItems);
    } catch (error) {
        res.json(error);
    }
})

// Get specific item

router.get('/api/items/:id', async (req, res) =>{
    try {
        const specificItem = await foodItemModel.findById(req.params.id);
        res.status(200).json(specificItem);
    } catch (error) {
        res.json(error);
    }
})

// Update Item
router.put('/api/item/:id', async(req, res)=>{
    console.log(req.params.id);
    try {
        const updateitem = await foodItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated');
    } catch (error) {
        res.json(error);
    }
})

// Delete Item
router.delete('/api/item/:id', async (req,res)=>{
    console.log(req.params.id);
    
    try {
        const deleteItem = await foodItemModel.findByIdAndRemove(req.params.id);
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error)
    }
})


console.log('hii');
module.exports = router;