const database = require('./database')
class SofaModel extends database{
    constructor(){
        super()
    }
    getAllSofa(callback){
        let sql = `select * from shops where shop_type=3 `
        this.conn.query(sql,callback)
    }
    getSingleSofa(callback){
        let sql = `select * from shops where shop_type=3 and shop_partype=1 `
        this.conn.query(sql,callback)
    }
    getTripleSofa(callback){
        let sql = `select * from shops where shop_type=3 and shop_partype=3 `
        this.conn.query(sql,callback)
    }
    getDoubleSofa(callback){
        let sql = `select * from shops where shop_type=3 and shop_partype=2 `
        this.conn.query(sql,callback)
    }
    getRandomData(callback){
        let sql = `select * from shops order by rand() limit 8`
        this.conn.query(sql,callback)
    }
}
module.exports = SofaModel;