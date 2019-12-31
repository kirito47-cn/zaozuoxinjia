<template>
  <div>
      {{item}}
    <el-container>
        <el-aside> <img :src="item[0].shop_imgsrc" alt="xxx"></el-aside>
        <el-main>
            <h3>{{item[0].shop_name}}</h3>
            <h3>￥{{item[0].shop_price}}</h3>
        </el-main>
    </el-container>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            item:[]
        }
    },
    created(){
        // console.log(this.$route.query.itemId);
        axios.get('http://localhost:9999/getItem',{
            params:{
                id:this.$route.query.itemId
            }
        }).then(data=>{
            this.item = data.data.data
        })
    }
}
</script>

<style>

</style>