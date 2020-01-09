let express = require("express");
let bodyPaser = require("body-parser");
let app = express();

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(session({
    secret: "lilan.163.com",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

//设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    next();
});

app.use(bodyPaser.json()); //处理前端传递数据为json 格式
app.use(bodyPaser.urlencoded({
    extended: true //让后端识别urlencoded ，gzip 文件格式
}))

// 静态资源托管
app.use(express.static(__dirname + "/public"))
// 启动子路由
app.use('/user', require("./Controller/UserController"))
app.use('/manage',require("./Controller/ManagerController"))


app.listen(8888, function () {
    console.log("监听端口8888.....")
})






