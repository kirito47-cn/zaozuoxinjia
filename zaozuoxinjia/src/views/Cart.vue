<template>
  <div class="content">
    <!-- 空购物车 -->
    <div v-if="cartProducts.length==0" class="nullCar">
      <div class="carImg"></div>
      <p>你的购物车中还没有任何商品</p>
    </div>

    <!-- 有商品的购物车 -->
    <div v-else class="haveProduct">
      <p class="singleProduct">单品</p>
      <table>
        <tr class="theadBox" v-for="(item,index) in cartProducts" :key="index">
          <!-- 选择 -->
          <th class="check" @click="selectedOne(item)">
            <input :value="index" type="checkbox" v-model="arr" :checked="item.isChecked" />
          </th>
          <!-- 图片 -->
          <th class="pictureBox">
            <img class="imgBox" :src="item.car_img" alt @click="turntoDetail(index)" />
          </th>
          <!-- 商品名称 -->
          <th>
            <dl>
              <dt class="dtDd">{{item.cart_name}}</dt>
              <!-- <dd>
                        <span>谷黄/</span>
                        <span>无扶手双人座</span>
              </dd>-->
            </dl>
          </th>
          <!-- 商品发货时间 -->
          <th>预计明天12：00前发货</th>
          <!-- 商品价格 -->
          <th>{{item.car_num * item.cart_price | filterMoney(item.car_num * item.cart_price)}}</th>
          <!-- 商品数量 -->
          <th class="addsub">
            <span class="spantwo" @click="reduceCount(item)">
              <input type="button" value="-" />
            </span>
            <span class="spanone" style="cursor: default">
              <input type="text" v-model="item.car_num" disabled style="cursor: default" />
            </span>
            <span class="spantwo" @click="addCount(item)">
              <input type="button" value="+" />
            </span>
          </th>
          <!-- 商品删除 -->
          <th class="del" @click="remove(item.cart_id,item)">删除</th>
        </tr>
        <!-- 订单总价格 -->
        <div class="totalPrice">
          <div class="selectAllBox" @click="selectedAll()">
            <input type="checkbox" style="zoom:200%;" :checked="isAllChecked" />
            <p>全选</p>
          </div>

          <p class="priceAll">总价：{{totalPrice | filterMoney(totalPrice)}}</p>
          <div>
            <button type="button" class="buyButton" @click="toBuy">立即下单</button>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cartProducts: [],
      arr: [],
      isAllChecked: false
    };
  },
  //   计算价格
  computed: {
    totalPrice: function() {
      console.log(this.arr); // arr是获取勾选商品的索引
      var totalPrice = 0;
      this.cartProducts.forEach((el, index) => {
        if (this.arr.indexOf(index) != -1) {
          console.log(el.car_num, el.cart_price);
          totalPrice += el.car_num * el.cart_price;
        }
      });
      return totalPrice;
    }
  },
  watch: {
    cartProducts(value) {
      // console.log(value.length);
      this.$store.commit("sendValue", value);
    }
  },
  //   获取购物车商品
  created() {
    axios.get("http://localhost:9999/cartProducts").then(res => {
      console.log(res.data);
      this.cartProducts = res.data.data;
      for (var i = 0; i < res.data.length; i++) {
        this.itemPrice = res.data[i].cart_price * res.data[i].car_num;
      }
    });
  },
  methods: {
    //减数量
    reduceCount(item) {
      //   console.log(item);
      return item.car_num <= 1 ? 1 : item.car_num--;
    },
    //加数量
    addCount(item) {
      return item.car_num++;
    },
    //   删除商品
    remove(productId, product) {
      if (confirm("确定删除？")) {
        for (var i = 0; i < this.arr.length; i++) {
          if (this.arr[i] == product.car_num * product.cart_price) {
            this.arr.splice(i, 1);
          }
        }
        axios
          .get("http://localhost:9999/deleteProducts", {
            params: {
              productId: productId
            }
          })
          .then(res => {
            // this.$store.commit('reduceCartNum')
            this.$message({
              type: "success",
              message: "删除成功",
              offset: 60
            });
            axios.get("http://localhost:9999/cartProducts").then(res => {
              this.cartProducts = res.data.data;
            });
          });
      }
    },
    //   跳转商品的详情页面
    turntoDetail(index) {
      console.log(this.cartProducts[index].cart_id);
      this.$router.push({ path: "/item",query:{cartId:this.cartProducts[index].cart_id}});
    },
    //   点击立即下单
    toBuy() {
      if (!window.sessionStorage.getItem("loginInfo")) {
        //未登录状态
        this.$router.push({ path: "/login" });
      } else {
        if (this.arr.length == 0) {
          this.$message({
            message: "亲，您还没有选择商品哦!",
            type: "error",
            offset: 60
          });
        } else {
          this.$message({
            message: "购买成功!",
            type: "success",
            offset: 60
          });
         
          axios.get('http://localhost:9999/deleteAll').then(res=>{

          })  
          axios.get("http://localhost:9999/cartProducts").then(res => {
              this.cartProducts = res.data.data;
          });
        }
      }
    },
    // 单个复选框事件
    selectedOne: function(item) {
      if (typeof item.isChecked == "undefined") {
        this.$set(item, "isChecked", true);
      } else {
        item.isChecked = !item.isChecked;
      }

      this.isSelectedAll();
    },
    // 判断是否全选
    isSelectedAll() {
      var flag = true;
      this.cartProducts.forEach(function(value, index) {
        if (!value.isChecked) {
          flag = false;
        }
      });
      this.isAllChecked = flag;
    },
    // 全选与取消全选
    selectedAll() {
      this.isAllChecked = !this.isAllChecked;
      var aa = this.isAllChecked;
      this.arr = [];
      this.cartProducts.forEach((value, index) => {
        if (aa) {
          this.arr.push(index);
        }
        value.isChecked = aa;
      });
    }
  },
  filters: {
    filterMoney(val) {
      return "￥" + val.toFixed(2) + "元";
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.content {
  position: relative;
  /* height: 50% */
  /* height: 350px; */
  z-index: 1;
}
.nullCar {
  width: 17%;
  height: 300px;
  margin: 0px auto;
  margin-top: 320px;
  color: #cdcccf;
  font-size: 26px;
}
.carImg {
  width: 189px;
  height: 189px;
  margin-left: 78px;
  margin-bottom: 36px;
  background-image: url("../assets/car.png");
  background-repeat: no-repeat;
  background-position: -894px 0px;
}
.haveProduct {
  width: 80%;
  background-color: whitesmoke;
  margin: 50px auto;
}
.singleProduct {
  width: 90%;
  height: 100px;
  margin: 0 auto;
  line-height: 108px;
  border-bottom: 6px solid white;
  font-size: 28px;
  font-weight: bolder;
  letter-spacing: 8px;
}
table {
  width: 100%;
}
.theadBox {
  width: 90%;
  box-sizing: border-box;
  height: 120px;
  background-color: white;
  margin: 27px auto;
  margin-left: 79px;
  display: flex;
  text-align: center;
  line-height: 120px;
  justify-content: space-between;
}
.check {
  margin-left: 22px;
}
.check input {
  zoom: 200%;
  margin-top: 24px;
  cursor: pointer;
}
.del {
  margin-right: 82px;
  cursor: pointer;
  color: gray;
}
.del:hover {
  color: black;
}
.imgBox {
  width: 133px;
  height: 91px;
  cursor: pointer;
}
.addsub {
  letter-spacing: 15px;
}
.addsub p {
  display: inline;
}
.addsub span {
  padding-left: 15px;
  cursor: pointer;
}
.addsub span input {
  background-color: white;
  border: 0px;
  width: 22px;
  margin-left: 2px;
  margin-right: 12px;
  cursor: pointer;
  outline-style: none;
}
.spanone {
  border: 1px solid gray;
  border-right: 0px solid transparent;
  border-left: 0px solid transparent;
}
.spantwo {
  border: 1px solid gray;
}

.dtDd {
  margin-top: 0px;
  height: 29px;
}
.totalPrice {
  background-color: gainsboro;
  width: 80%;
  font-size: 17px;
  display: flex;
  justify-content: space-around;
  bottom: 0px;
  z-index: 1;
  position: absolute;
}
.priceAll {
  height: 42px;
  font-size: 22px;
  font-weight: bolder;
  line-height: 42px;
  margin-left: 694px;
}
.buyButton {
  background-color: black;
  color: white;
  width: 120px;
  height: 42px;
  outline-style: none;
  cursor: pointer;
}
.selectAllBox {
  margin-left: 2px;
  display: flex;
  align-items: center;
}
</style>

