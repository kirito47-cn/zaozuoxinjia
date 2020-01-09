const express = require('express');
const sofaModel = require('../model/sofaModel')
const router = express.Router();
router.get('/sofa',(req,res)=>{
    let sofamodel = new sofaModel();
    sofamodel.getAllSofa((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
   
})
router.get('/singlesofa',(req,res)=>{
    let sofamodel = new sofaModel();
    sofamodel.getSingleSofa((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
   
})
router.get('/triplesofa',(req,res)=>{
    let sofamodel = new sofaModel();
    sofamodel.getTripleSofa((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/doublesofa',(req,res)=>{
    let sofamodel = new sofaModel();
    sofamodel.getDoubleSofa((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/randomData',(req,res)=>{
    let sofamodel = new sofaModel();
    sofamodel.getRandomData((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
module.exports = router