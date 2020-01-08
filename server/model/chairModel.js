const database = require('./database')
class ChairModel extends database{
    constructor(){
        super()
    }
    getAllChair(callback){
        let sql = `select * from shops where shop_type = 1 `
        this.conn.query(sql,callback)
    }
    getZuoyi(callback){
        let sql = `select * from shops where shop_type = 1 and shop_partype=1 `
        this.conn.query(sql,callback)
    }
    getZuodun(callback){
        let sql = `select * from shops where shop_type = 1 and shop_partype=2 `
        this.conn.query(sql,callback)
    }
     getXiuxianyi(callback){
        let sql = `select * from shops where shop_type = 1 and shop_partype=3 `
        this.conn.query(sql,callback)
    }
}
module.exports = ChairModel;