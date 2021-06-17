const router = require("express").Router();
const Category = require("../models/Category");

router.post("/",async(req,res) =>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.savve();
        res.status(200).json(savedCat);
    }catch(err){
        rew.status(500).json(err);
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const cat = await Category.findbyId(req.params.id);
        res.status(200).json(cat);
        }catch(err){
            res.status(500).json(err);
    }
});

module.exports = router;
