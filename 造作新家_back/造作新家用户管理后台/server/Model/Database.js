let mysql = require("mysql");

class Database {
    constructor() {
        this.mydb = mysql.createConnection({
            host: "192.168.6.13", //主机 ip
            user: "root", //MySQL认证用户名
            password: "123456", //MySQL认证用户密码
            port: "3306", //端口号
            database: "zaozuoxinjia" //数据库里面的数据
        })
    }
}

module.exports = Database;