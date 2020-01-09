<template>
  <div>
    <div class="container">
      <el-container v-if="item.length!=0">
        <el-aside class="img-side" width="800px" style>
          <img :src="item[0].shop_imgsrc?item[0].shop_imgsrc:item[0].car_img|changeUrl" alt="xxx" />
        </el-aside>
        <el-main>
          <h1 class="name">{{item[0].shop_name?item[0].shop_name:item[0].cart_name}}</h1>
          <h1 class="price">￥{{(item[0].shop_price?item[0].shop_price:item[0].cart_price)}}</h1>
          <div class="info-div" style="backgroundColor:#E56A69;color:white">设计师手选组合，最高可省¥2060，可以看看</div>
          <div class="info-div" style="backgroundColor:#FFEBE8;">2020年1月10日，大件家具物流停运，年前抢先焕新家</div>
          <div class="info-div">今天下单，将于2020-01-03前发货，大件家具会致电确认</div>

          <el-input-number
            v-model="num"
            size="small"
            style="border:1px solid black;width:100px; margin-right:10px;margin-top:180px"
            controls-position="right"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
          <el-button>立即购买</el-button>
          <el-button style="backgroundColor:black;color:white" @click="addcartNum">加入购物车</el-button>
        </el-main>
      </el-container>
    </div>
    <img src="https://img.zaozuo.com/ad684b8ae4994c5753c8269ebf214c50" style="width:100%" alt srcset />
    <img src="https://img.zaozuo.com/0f3a208e438ba970971ebbe2588204cd" style="width:100%"    alt srcset />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      item: [],
      num: 1,
      radio1: "上海"
    };
  },
  methods: {
    addcartNum() {
      this.$store.commit("addCartNum");
      axios
        .post("http://localhost:9999/addtocart", {
          name: this.item[0].shop_name?this.item[0].shop_name:this.item[0].cart_name,
          price: this.item[0].shop_price?this.item[0].shop_price:this.item[0].cart_price,
          imgurl: this.item[0].shop_imgsrc?this.item[0].shop_imgsrc:this.item[0].car_img,
          number: this.num,
          ischecked: false
        })
        .then(res => {
          this.$message({
            type: "success",
            message: "添加成功",
            offset: 60
          });
        });
    },
    setData(data) {
      this.item = data;
      console.log(this.item);
    }
  },
  filters:{
   changeUrl(oldurl) {
      // console.log(oldurl);
      // console.log(oldurl.replace(/localhost/,'192.168.6.12'));
      return oldurl.replace(/localhost/, "192.168.6.12");
    }
  },
  created() {
    // console.log(this.$route.query);
    // axios
    //   .get("http://localhost:9999/getItem", {
    //     params: { 
    //       cartid:this.$route.query.cartId,
    //       id: this.$route.query.itemId==undefined?undefined:id
         
    //     }
    //   })
    //   .then(data => {
    //     // console.log(data.data.data);
    //     this.item = data.data.data;
    //     //  console.log(this.item[0]);
    //   });
  
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to,from);
    axios
      .get("http://localhost:9999/getItem", {
        params: {
          id: to.query.itemId,
          cartId:to.query.cartId
        }
      })
      .then(data => {
        next(vm => vm.setData(data.data.data));
      });
  }
};
</script>

<style lang="scss" scoped >
.container {
  width: 89%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 0 2.5rem;
  // border: 1px solid red;h1
  // display: flex;
  .img-side {
    padding-left: 160px;
    position: relative;
    height: 520px;
  }
  img {
    position: absolute;
    // height: 100%;
    height: 380px;
    // width: 100%;
    left: 250px;
    bottom: 120px;
    // top: 10px
  }

  .price {
    color: #e56a69;
  }
  .info-div {
    width: 460px;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    box-sizing: border-box;
    color: #313131;
  }
}
</style>