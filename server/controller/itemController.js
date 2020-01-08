const express = require('express');
const itemModel = require('../model/itemModel')
const router = express.Router();
router.get('/getItem',(req,res)=>{
    let itemmodel = new itemModel();
    console.log(req.query);
    if(req.query.id){
        itemmodel.getItembyId(req.query.id,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
    }
    if(req.query.cartId){
       itemmodel.getItemByCartId(req.query.cartId,(err,data)=>{
           if(err){
               console.log(err);
               return;
           }
           res.json({data:data})
       }) 
    }
    
  
})
module.exports = router
