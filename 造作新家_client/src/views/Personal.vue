<template>
  <div>
    <!-- <mynav></mynav> -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-type">
      <el-tab-pane label="会员中心" name="second">
          <member></member>
      </el-tab-pane>
      <el-tab-pane label="我的订单" name="first" class="myorder">
           <order></order>
      </el-tab-pane>
      <el-tab-pane label="我的优惠券&礼品卡" name="third">
           <coupon></coupon>
      </el-tab-pane>
      <el-tab-pane label="我的消息" name="fourth">
        <div class="mynews"></div>
        <p class="mynews-tetx">你还没有收到任何消息</p>
        <div class="readed">全部已读</div>
      </el-tab-pane>
      <el-tab-pane label="我的晒单" name="fifth">
        <assess></assess>
      </el-tab-pane>
      <el-tab-pane label="我的资料" name="sixth">
        <myinfo></myinfo>
      </el-tab-pane>
      <el-tab-pane label="我的收藏" name="seveth">
        <collection></collection>
      </el-tab-pane>
    </el-tabs>
     <bottom></bottom>
  </div>
</template>

<script>
// import mynav from "../components/nav";
import member from "../components/MemberCenter";
import bottom from "../components/bottom";
import order from "../components/Order";
import coupon from "../components/coupon";
import assess from "../components/assess";
import myinfo from "../components/myinfo";
import collection from "../components/Collection";
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
   
    member:member,
    bottom:bottom,
    order:order,
    coupon:coupon,
    assess:assess,
    myinfo:myinfo,
    collection:collection
  },
  mounted() {
    var nav = document.querySelector("#nav");
        nav.style.display = "block";
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.zIndex = "1000000";
        nav.style.display = "flex";
    }
  }
  

</script>

<style>
.nav-shouye{
    border-bottom:none!important;
}
.el-tabs__header{
    margin: 0!important;
}
.el-type{
    margin-top: 50px;
}
.el-tabs__nav-wrap{
  height: 50px;
  background-color: #f6f6f6
}
.el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px!important;
    background-color: #d2d2d2;
    z-index: 1
}
.el-tabs__nav-scroll{
    height: 50px;
}
.el-tabs__nav{
    height: 50px;
    line-height: 50px;
    margin-left: 10%;
    font-family: siyuan,"Microsoft YaHei",sans-serif;
}
.el-tabs__active-bar{
   background-color: #000!important;
}
.el-tabs__item.is-active {
    color: #313131!important;
}
.el-tabs__item:hover {
    color: #313131!important;
    cursor: pointer;
}
.mynews{
    width: 189px;
    height: 189px;
    margin: 0 auto;
    margin-top: 150px;
    background: url("../assets/home-img/order-img1.png") no-repeat;
    background-position: -705px 0;
}
.mynews-tetx{
  color: #c4c3c3;
    text-align: center;
    font-size: 18px;
}
.readed{
    width: 100px;
    height: 35px;
    border: #1d1d1d 1px solid;
    line-height: 35px;
    border-radius: 2px;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    margin: 150px;
}
.readed:hover{
  background: #000;
  color: white
}
</style>
