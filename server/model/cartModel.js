const database = require('./database')
class CartModel extends database{
    constructor(){
        super()
    }
    getAllProducts(callback){
        let sql = `select * from shopcart `
        this.conn.query(sql,callback)
    }
    deleteProducts(id,callback){
        let sql = `delete from shopcart where cart_id=${id}`
        this.conn.query(sql,callback)
    }
    addProduct(product1,callback){
        // console.log(`typeof`+typeof product1);
        // console.log(product1.name);
       let product =JSON.parse(JSON.stringify(product1)) 
        // product = JSON.parse(product)
        let sql = `insert into shopcart(cart_name,car_img,cart_price,car_num,isChecked) values ('${product.name}','${product.imgurl}','${product.price}','${product.number}','${product.ischecked}')`;
        this.conn.query(sql,callback)
    }
    deleteAll(callback){
        let sql = `delete from shopcart where 1=1`//删除所有行
        //sql = `truncate shopcart`
        this.conn.query(sql,callback)
    }
  
}
module.exports = CartModel;