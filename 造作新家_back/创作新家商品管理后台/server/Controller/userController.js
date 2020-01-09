const express = require('express');
const bodyParser=require('body-parser');
const router=express.Router();
const UserModel=require('../Model/UserModel.js');

const cookieParser = require("cookie-parser");
const session = require("express-session");

router.use(cookieParser());
router.use(session({
    name: "session-id",
    secret: "aaaa",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send({code: 1, msg: "ok"})
})

router.get('/cheackLogin', (req, res,next) => {
    console.log("check====" + JSON.stringify(req.session))
    console.log("check---" + req.session.aid)
  if(req.session.uid){
      res.send({
        code:1
      });
  }else{
      res.send({
         code:-1
      });
  }
});

router.get('/login', (req, res) => {
    console.log(req.query);
    let userModel=new  UserModel();
     userModel.login(req.query.username,req.query.password,(err,data)=>{
      if(err){
          console.log(err);
      };
      console.log(data[0]);
      if(data.length==0){
          res.send({
              code:-1,
              msg:"用户名错误"
          });
      }else{
          if(data[0].password===req.query.password){
            console.log("data----" + data[0].id);
            req.session.username = data[0].username;
              req.session.uid=data[0].id
              console.log(JSON.stringify(req.session))
              res.send({
                  code:1,
                  msg:"登录成功"
              });
          }else{
              res.send({
                  code:-2,
                  msg:"密码错误"
              });
          }
      }
     })
});

module.exports=router;