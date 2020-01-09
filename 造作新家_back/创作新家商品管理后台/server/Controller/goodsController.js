const express = require('express');
const router = express.Router();
const GoodsModel = require('../Model/GoodsModel')
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const cookieParser = require("cookie-parser");
const session = require("express-session");

// 处理post请求的参数
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
//处理文件上传操作
var objMulter = multer({
    dest: './public/uploads'
});
router.use(objMulter.any()) //any()表示任意类型的文件


router.get('/list', (req, res) => {
    // console.log("page---" + req.query.page)
    // console.log("limit---" + req.query.limit)
    let goodsModel = new GoodsModel();
    goodsModel.getgoodslist(req.query.page, req.query.limit,(err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        if (results.length == 0) {
            res.send(
                {
                    "code": -1,
                    "msg": "查询失败",
                    "count": 1000,
                    "data": []
                  } 
            )
        } else {
            res.send(
                {
                    "code": 0,
                    "msg": "查询成功",
                    "count": 1000,
                    "data": results
                  } 
            );
        }
    })
});

router.post('/del', (req, res) => {
    let goodsModel = new GoodsModel();
    let id = req.body.id;
    goodsModel.delgoodsbyid(id, (err, results) => {
        if (err) {
            console.log(err)
        };
        if (results.affectedRows) {
            res.send({
                code: 0,
                data: results
            });
        }
    })
});

router.post('/upload', (req, res) => {
    console.log(req.files);
    var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
    var backName = "uploads/"+req.files[0].filename + path.parse(req.files[0].originalname).ext;
    
    // oldPath: 旧文件路径及名称
    // newPath： 新文件路径及名称
    // callback： 回调函数
    // fs.rename(oldPath, newPath, callback)
    console.log(newName);
    fs.rename(req.files[0].path, newName, function (err) {
        if (err) {
            res.send({
                "code": 0,
                "msg": "上传失败",
                "data": {
                    "src": ""
                }
            })
        } else {
            res.send({
                "code": 0,
                "msg": "上传成功",
                "data": {
                    "src": "http://localhost:3000/" + backName
                }
            })
        }
    })
});

router.post('/add', (req, res) => {
    let flim = req.body;
    console.log(req.body)
    // console.log(flim);
    let goodsmodel = new GoodsModel();
    goodsmodel.addgoods(flim, (err, data) => {
        console.log("data----" + JSON.stringify(data));
        console.log(data);
        if (err) {
            console.log(err);
            res.send({
                code: -1,
                msg: "添加电影失败"
            })
        }
        if (data.affectedRows) { //添加成功，affectedRows为正值
            res.send({
                code: 0,
                msg: "添加电影成功"
            })
        }

    });
});

router.post('/change', (req, res) => {
    console.log(req.body);
    let film=req.body;
    console.log(film.file);
    let goodsmodel = new GoodsModel();
    goodsmodel.changegoodsByid(film,(err,data)=>{
        console.log(data);
        if(err){
            res.send({
                code:-1,
                msg:'修改错误'
            });
        }
        if(data.affectedRows){
            res.send({
                code:0,
                msg:'修改成功'
            });
        }
    })

});
module.exports = router;