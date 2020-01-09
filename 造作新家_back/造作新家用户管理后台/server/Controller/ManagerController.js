let express=require("express")
let router=express.Router();
let bodyParser=require("body-parser")
let ManagerModel=require("../Model/ManagerModel")

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json());

let managerModel=new ManagerModel();

// 登录操作
router.post("/login",function(req,res){
    managerModel.login(req.body.username,req.body.password,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        if(result.length==0){
            res.send({
                code:-1,
                msg:"用户不存在"
            })
        }else{
            if(result[0].password==req.body.password){
                // 通过session设置id值，判断登录状态
                // req.session.uid=result[0].id;
                res.send({
                    code:1,
                    msg:"登录成功",
                    aid:result[0].id
                })
            }else{
                res.send({
                    code:-2,
                    msg:"密码错误"
                })
            }
        }
    })
})

module.exports=router;



