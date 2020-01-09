const mysql = require('mysql');
class Database{
    constructor(){
        this.mydb=mysql.createConnection({
            host: "192.168.6.13",
            port: "3306",
            user: "root",
            password: "123456",
            database: "zaozuoxinjia"
        });
        this.mydb.connect();
    }
}
module.exports=Database;
