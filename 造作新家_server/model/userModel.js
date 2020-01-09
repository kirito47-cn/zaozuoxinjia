const database = require('./database')
class Usermodel extends database{
    constructor(){
        super()
    }
  
    loginCheck(userinfo,callback){
        let sql = `select * from admin where username='${userinfo.username}'`
        this.conn.query(sql,callback)
    }
    addUser(userinfo,callback){
        let sql = `select * from admin where username='${userinfo.username}'`
        return new Promise((res,rej)=>{
            this.conn.query(sql,(err,data)=>{
                if(err){
                    rej(err);
                    return
                }
                if(data.length){
                    res({code:-1,msg:'用户已存在'})
                }else{
                    let sql = `insert into admin(username,password) values('${userinfo.username}','${userinfo.password}')`;
                    this.conn.query(sql,callback)
                }
            })
        })
    }
  
}
module.exports = Usermodel;