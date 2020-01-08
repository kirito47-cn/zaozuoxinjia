const express = require('express');
const cartModel = require('../model/cartModel')
const bodyParser = require('body-parser')
const router = express.Router();
let cartmodel = new cartModel();
router.get('/cartProducts',(req,res)=>{
    cartmodel.getAllProducts((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/deleteProducts',(req,res)=>{
 
    //  console.log(typeof (cartmodel.deleteProducts));
    // console.log(req.query);
     cartmodel.deleteProducts(req.query.productId,(err,data)=>{
         if(err){
             console.log(err);
             return err;
         }
         res.json({code:1,msg:'删除成功'})
     })
 })
 router.post('/addtocart',(req,res)=>{
    console.log(req.body);
    cartmodel.addProduct(req.body,(err,data)=>{
        if(err){
            console.log(err);
            return err;
        }
        res.json({code:1,msg:'添加成功'})
    })
 })
 router.get('/deleteAll',(req,res)=>{
 
    //  console.log(typeof (cartmodel.deleteProducts));
    // console.log(req.query);
     cartmodel.deleteAll((err,data)=>{
         if(err){
             console.log(err);
             return err;
         }
         res.json({code:1,msg:'删除成功'})
     })
 })

module.exports = router