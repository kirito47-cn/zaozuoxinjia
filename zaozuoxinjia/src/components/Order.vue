<template>
  <div class="orderpage">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-two">
      <el-tab-pane label="未付款" name="second"></el-tab-pane>
      <el-tab-pane label="已付款" name="first"></el-tab-pane>
      <el-tab-pane label="已入手好物" name="third"></el-tab-pane>
      <el-tab-pane label="其他渠道订单" name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="emptypage">
      <div></div>
      <p>您还没有任何订单</p>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scope>
.orderpage {
  margin-top: 30px;
}
.el-two .el-tabs__nav-wrap {
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
}
.el-two .el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px !important;
  background-color: transparent;
  z-index: 1;
}
.el-tabs__nav-scroll {
  height: 50px;
}
.el-two .el-tabs__nav {
  height: 50px;
  line-height: 50px;
  margin-left: 10%;
  font-family: siyuan, "Microsoft YaHei", sans-serif;
  width: 1106px;
  background-color: #ccc;
}
.el-two .el-tabs__active-bar {
  background-color: transparent !important;
}
.el-two .el-tabs__item {
  float: left;
  text-align: center;
  line-height: 50px;
  color: white;
  margin-left: 20px;
}
.el-two .el-tabs__item.is-active {
  color: #5bb688 !important;
}
.el-two .el-tabs__item:hover {
  color: #5bb688 !important;
  cursor: pointer;
}
.emptypage {
  width: 1106px;
  height: 296px;
  margin: 0 auto;
  padding: 150px 0;
  // background-color: white;
}
.emptypage > div {
  width: 189px;
  height: 189px;
  margin: 0 auto;
  background: url("../assets/home-img/order-img1.png") no-repeat;
  background-position: -516px 0;
}
.emptypage > p {
  color: #c4c3c3;
  text-align: center;
  font-size: 18px;
  padding-top: 40px;
}
</style>
