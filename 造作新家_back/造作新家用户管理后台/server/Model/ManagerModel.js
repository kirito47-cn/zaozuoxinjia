let Database=require("./Database");

class ManagerModel extends Database {
    constructor(){
        super();
    }

    // 登录操作
    login(username,password,callback){
        let sql=`select * from manager where username='${username}'`;
        this.mydb.query(sql,callback);
    }
}

module.exports=ManagerModel;

