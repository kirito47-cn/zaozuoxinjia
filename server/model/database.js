const mysql = require('mysql');

class Database {
    constructor() {
        this.conn  = mysql.createConnection({
            host:'localhost',
            port:`3306`,
            database:`zaozuoxinjia`,
            user:`root`,
            password:`123456`
        }
        )
        // this.init()
        
    }
    init(){
        this.conn.connect() ;
        console.log(`数据库连接成功`);
     }
}
module.exports = Database;