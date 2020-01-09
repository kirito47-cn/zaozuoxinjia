<template>
  <div class="desks">
    <div class="chair-box" ref="graybox" v-for="(item,index) in desks" @click="linktoitem(index)" :key="index">
        <a href="#" >
            <img  :src="item.shop_imgsrc|changeUrl" />
        </a>
        <p class="chair-name">{{item.shop_name}}</p>
        <p class="chair-price">￥{{item.shop_price}}</p>
        
       <div class="outer-hover"><div class="hover"  >{{item.shop_desc}}</div></div> 
    </div>
    <div class="chair-box holder " v-for="item in holder" :key="item+'ind'"></div>
    <!-- <button @click="change">gaibian</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      desks: []
    };
  },
  computed: {
    holder() {//占位 解决flex位置自动增加
     let holder = []
     for(let i = 0 ;i<4 - (this.desks.length % 4);i++){
         holder.push(i)
     } 
     return holder
    }
  },
  methods:{
   
      linktoitem(index){
           this.$router.push({path:'/item',
           query:{
             itemId:this.desks[index].shop_id
        }
        })
      }
  },
  created() {
    axios.get("http://localhost:9999/desk").then(res => {
      this.desks = res.data.data;
    });
  },
  filters:{
 changeUrl(oldurl){
          console.log(oldurl.replace(/localhost/,'192.168.6.12'));
          return oldurl.replace(/localhost/,'192.168.6.12')
      }
  },
  watch:{
    $route(to,from){
      // console.log(to,from);
      console.log(to.name);
      if(to.name !="item"){ 
        axios.get("http://localhost:9999/"+to.name).then(res => {
        this.desks = res.data.data
      })}else{
       
      }
     
    }
  }
};
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding:0
}
.holder {
  opacity: 0;
}
.chair-box {
 
//   border: 1px solid blue;
  box-sizing: border-box;
  margin: 20px 14px 0 0;
  flex: 20%;
  width: 230px;
  height: 285px;
  padding-bottom: 50px;

  text-align: center;
  line-height: 20px;
  img {
    height: 200px;
    width: 230px;
  }
  .chair-name{
      color: #313131;
      font-weight: bold;
      font-family: siyuan,"Microsoft YaHei",sans-serif;

  }
  .chair-price{
      font-size: 14px ;
      font-weight: 400;
      padding-top: 4px
  }
  .hover{
        border: 5px solid #313131;
        position: absolute;
        width: 97%;
        height: 40%;
        top: 70px;
        display: none
  }
  
}
.chair-box:hover .hover{
//   !important; 
      display: block
 }
 .chair-box:hover .outer-hover{
    background-color: rgba($color: white, $alpha: 0.7);
 }
 .outer-hover{
     position: relative;
     width: 100%;
     height: 285px;
     top: -250px
 }

.desks {
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}


</style>