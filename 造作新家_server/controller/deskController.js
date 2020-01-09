const express = require('express');
const deskModel = require('../model/deskModel')
const router = express.Router();
router.get('/desk',(req,res)=>{
    let deskmodel = new deskModel();
    deskmodel.getAllDesk((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
 
})
router.get('/bookdesk',(req,res)=>{
    // console.log(111);
    let deskmodel = new deskModel();

    deskmodel.getBookDesk((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/chaji',(req,res)=>{
    // console.log(111);
    let deskmodel = new deskModel();

    deskmodel.getChaji((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
router.get('/bianji',(req,res)=>{
    // console.log(111);
    let deskmodel = new deskModel();

    deskmodel.getBianji((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({data:data})
    })
})
module.exports = router