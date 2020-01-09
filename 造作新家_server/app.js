const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    next();
});
app.use(bodyParser.urlencoded({extended:false}));//解析 x-www-form-urlencoded
app.use(bodyParser.json());//无法演示 解析json数据依赖于urlencoded模块 必须同时应用
app.use('/',require('./controller/chairController'))
app.use('/',require('./controller/deskController'))
app.use('/',require('./controller/itemController'))
app.use('/',require('./controller/sofaController'))
app.use('/',require('./controller/cartController'))
app.use('/',require('./controller/userController'))
app.listen('9999',()=>{
    console.log(`server run at 9999`);
})