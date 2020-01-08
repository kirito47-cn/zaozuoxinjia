const express = require('express');
const UserModel = require('../model/userModel')
const bodyParser = require('body-parser')
const router = express.Router();
let usermodel = new UserModel();

router.post('/login',(req,res)=>{
    let userinfo = req.body;
    // console.log(userinfo);
    // res.json({d:1})
    usermodel.loginCheck(userinfo,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log(data.length);
        if(!data.length){
            res.json({status:-1,msg:'用户名不存在！'})
        }else{
            // console.log(data[0].password,userinfo.password);
            if(data[0].password!==userinfo.password){
                res.json({status:0,msg:'密码错误！'})
            }else{
                res.json({status:1,msg:'登录成功！',username:userinfo.username})
            }
        }
    })
})
router.post('/register',(req,res)=>{
    let userinfo = req.body;
    console.log(userinfo);
    usermodel.addUser(userinfo,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        if(data.affectedRows){
            res.json({code:1,msg:'注册成功！'})
        }
    }).then(value=>{
        res.json(value)
    }).catch(reason=>{
        res.json(reason)
    })
})

module.exports = router