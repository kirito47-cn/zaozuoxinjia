let express = require("express")
let router = express.Router();
let UserModel = require("../Model/UserModel")

let multer = require("multer")
let bodyParser = require("body-parser")
let path = require("path")
let fs = require("fs")
// 处理post请求的参数
router.use(bodyParser.urlencoded({
    extended: true
}))
router.use(bodyParser.json())

// 处理上传的图片
var objMulter = multer({
    dest: './public/uploads/'
})
router.use(objMulter.any());

let userModel = new UserModel();

router.get('/list', function (req, res) {
    console.log("page---" + req.query.page)
    console.log("limit---" + req.query.limit)
    userModel.getUserList(req.query.page, req.query.limit, function (err, result) {
        if (err) {
            console.log("错误查询=" + err);
            return;
        }
        if (result.length == 0) {
            res.send({
                code: -1,
                data: "没有用户"
            })
        } else {
            res.send({
                code: 0,
                data: result,
                count: 50
            })
            console.log(result)
        }
    });
})

router.post("/del", function (req, res) {
    let id = req.body.id;
    userModel.delUserById(id, function (err, result) {
        if (err) {
            console.log("错误查询=" + err);
            return;
        }
        if (result.affectRows) {
            res.send({
                code: 0,
                data: result
            })
        }
    })
})

router.post("/add", function (req, res) {
    console.log(req.body);
    let users = req.body;

    userModel.addUser(users, function (err, result) {
        if (err) {
            console.log("错误查询=" + err);
            res.send({
                code: -1,
                msg: "添加用户失败"
            })
        }
        console.log(result)
        if (result.affectedRows) { //添加成功，affectedRows为正值1
            res.send({
                code: 1,
                msg: "添加用户成功"
            })
        }
    })

})

router.post("/change", function (req, res) {
    console.log(req.body);
    var user = req.body;

    userModel.changeUserById(user, function (err, result) {
        if (err) {
            console.log("错误查询=" + err);
            res.send({
                code: -1,
                msg: "用户修改失败"
            })
        }
        if (result.affectedRows) {
            res.send({
                code: 1,
                msg: "用户修改成功"
            })
        }
    })
})

module.exports = router;