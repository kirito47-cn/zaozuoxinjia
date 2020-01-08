const express = require('express');
const chairModel = require('../model/chairModel')
const router = express.Router();
router.get('/chair',(req,res)=>{
    let chairmodel = new chairModel();
    chairmodel.getAllChair((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/zuoyi',(req,res)=>{
    let chairmodel = new chairModel();
    chairmodel.getZuoyi((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/zuodun',(req,res)=>{
    let chairmodel = new chairModel();
    chairmodel.getZuodun((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/xiuxianyi',(req,res)=>{
    let chairmodel = new chairModel();
    chairmodel.getXiuxianyi((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
module.exports = router