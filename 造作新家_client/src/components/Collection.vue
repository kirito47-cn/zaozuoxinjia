<template>
  <div class="collectionpage">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-four">
      <el-tab-pane label="单品" name="second">
      </el-tab-pane>
      <el-tab-pane label="设计师" name="first">
      </el-tab-pane>
      <el-tab-pane label="其他" name="three">
      </el-tab-pane>
    </el-tabs>
    <div class="collect-bg">
        <div></div>
        <p>世间所有的那些美好,都应值得被好好收藏</p>
        <p>去收藏喜欢的单品吧</p>
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

<style>
.collectionpage {
  margin-top: 30px;
}
.el-four .el-tabs__nav-wrap {
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
}
.el-four .el-tabs__nav-wrap::after {
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
.el-four .el-tabs__nav {
  height: 50px;
  line-height: 50px;
  margin-left: 10%;
  font-family: siyuan, "Microsoft YaHei", sans-serif;
  width: 1106px;
  background-color: #ccc;
}
.el-four .el-tabs__active-bar {
  background-color: transparent !important;
}
.el-four .el-tabs__item {
  float: left;
  text-align: center;
  line-height: 50px;
  color: white;
  margin-left: 20px;
}
.el-four .el-tabs__item.is-active {
  color: #5bb688 !important;
}
.el-four .el-tabs__item:hover {
  color: #5bb688 !important;
  cursor: pointer;
}
.collect-bg{
    width: 82%;
    margin: 0 auto;
    margin-bottom: 300px;
}
.collect-bg>div{
    width: 258px;
    height: 189px;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 40px;
    background: url("../assets/home-img/order-img1.png") no-repeat;
    background-position: -258px 0;
}
.collect-bg>p{
    font-size: 19px;
    color: #c4c3c3;
    text-align: center;
}
</style>
