const database = require('./database')
class itemModel extends database{
    constructor(){
        super()
    }
    getItembyId(id,callback){
        let sql = `select * from shops where shop_id=${id}`
        this.conn.query(sql,callback)
    }
    getItemByCartId(cartId,callback){
        let sql = `select * from shopcart where cart_id=${cartId} `
        this.conn.query(sql,callback)
    }
}
module.exports = itemModel;