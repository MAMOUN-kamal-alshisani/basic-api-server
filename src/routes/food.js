'use strict';

const express=require('express');
const router=express.Router();
 
const {food}=require('../models/index')



router.get('/', (req, res)=>{
    res.send('hello world');
});


router.get('/food',getFoodQuery);
// router.get('/food:name',getFoodParam);
// router.post('/food',createNewFood)
// router.post('/food',createNewFood)




function getFoodQuery(req,res){

    res.send(`hey this is from query, ${req.query.name}`)

}



router.get('/person',(req,res)=>{

    res.send(`hey this is from query, ${req.query.name}, ${req.query.age}`)
    
    })
    
    
    
    router.get('/person/:name',(req,res)=>{
    
        res.send(`hey this is from the params, ${req.params.name}`)
        
        })


        module.exports=router;