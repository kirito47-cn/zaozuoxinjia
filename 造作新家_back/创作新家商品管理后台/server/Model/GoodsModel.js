const Database=require('./Database');
class GoodsModel extends Database{
    constructor(){
        super();
    }
    getgoodslist(page,num,callback){
        let sql=`select * from shops,type2,type  where shops.shop_type=type.type_id and type.type_id=type2.oldtype and type2.goodstype=shops.shop_partype  limit ${(page-1)*num},${num}`;
        this.mydb.query(sql,callback)
    }
    delgoodsbyid(id,callback){
        let sql=`delete from shops where shop_id=${id}`
        this.mydb.query(sql,callback);
    }
    addgoods(film,callback){
        let sql = `insert into shops(shop_name,shop_price, shop_desc,shop_imgsrc,shop_type) values(?,?,?,?,?)`;
        let data = [film.name, film.price, film.desc, film.file, film.type];
        console.log(data);
        this.mydb.query(sql, data, callback);
    }
    changegoodsByid(film,callback){
         let sql=`update shops set shop_name=?, shop_price=?, shop_desc=?, shop_imgsrc=?, shop_type=?,shop_partype=?
         where shop_id=?`;
         let data=[film.name, film.price, film.desc, film.file, film.type, film.type2, film.shop_id];
         console.log(data);
         this.mydb.query(sql,data,callback)
    }
}
module.exports=GoodsModel;