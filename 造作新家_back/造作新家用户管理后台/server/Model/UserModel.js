let Database = require("./Database");

class UserModel extends Database {
    constructor() {
        super();
    }

    get() {
        console.log(this.mydb)
    }
    // 获取用户列表
    getUserList(page, limit, callback) {

        let sql = `select * from admin limit ${(page-1)*limit},${limit}`;
        console.log(sql)
        this.mydb.query(sql, callback);
    }
    // 根据用户id删除记录
    delUserById(id, callback) {
        let sql = `delete from admin where id=${id}`;
        this.mydb.query(sql, callback)
    }

    // 添加用户
    addUser(users, callback) {
        // ?与数组中的元素一一对应
        let sql = `insert into admin(username,password) values(?,?)`;
        let paramsArray = [users.name, users.password]
        this.mydb.query(sql, paramsArray, callback)
    }

    // 根据用户id修改用户信息
    changeUserById(user, callback) {
        let sql = `update admin set username=?,password=? where id=?`;
        console.log(sql)
        console.log(user)
        let data = [user.name, user.password, user.id]
        this.mydb.query(sql, data, callback);
    }
}

module.exports = UserModel;