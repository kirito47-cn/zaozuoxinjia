const database = require('./database')
class DeskModel extends database{
    constructor(){
        super()
    }
    getAllDesk(callback){
        let sql = `select * from shops where shop_type = 2 `
        this.conn.query(sql,callback)
    }
    getBookDesk(callback){
        
        let sql = `select * from shops where shop_type=2 and shop_partype=1 `

        this.conn.query(sql,callback)

    }
    getChaji(callback){
        
        let sql = `select * from shops where shop_type=2 and shop_partype=2 `

        this.conn.query(sql,callback)

    }
    getBianji(callback){
        
        let sql = `select * from shops where shop_type=2 and shop_partype=3 `

        this.conn.query(sql,callback)

    }
}
module.exports = DeskModel;