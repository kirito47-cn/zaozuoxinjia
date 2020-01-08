<template>
  <div class="couponpage">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-three">
      <el-tab-pane label="优惠券" name="second">
          <div class="duihuan">
              <input type="text" placeholder="输入兑换码">
              <div>兑换</div>
          </div>
      </el-tab-pane>
      <el-tab-pane label="礼品卡" name="first">
          <div class="duihuan">
              <input class="card" type="text" placeholder="输入卡号">
              <input type="text" placeholder="输入兑换码">
              <div>兑换</div>
          </div>
      </el-tab-pane>
    </el-tabs>
    <div class="saying">
        <p>“春天责备没有灵魂的人。责备我不开花，不繁茂，即将速朽，</p>
        <p>没有灵魂。”——周云蓬</p>
        <p>但不要责备我们，正在准备中，优惠券马上就有。</p>
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
.couponpage {
  margin-top: 30px;
}
.el-three .el-tabs__nav-wrap {
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
}
.el-three .el-tabs__nav-wrap::after {
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
.el-three .el-tabs__nav {
  height: 50px;
  line-height: 50px;
  margin-left: 10%;
  font-family: siyuan, "Microsoft YaHei", sans-serif;
  width: 1106px;
  background-color: #ccc;
}
.el-three .el-tabs__active-bar {
  background-color: transparent !important;
}
.el-three .el-tabs__item {
  float: left;
  text-align: center;
  line-height: 50px;
  color: white;
  margin-left: 20px;
}
.el-three .el-tabs__item.is-active {
  color: #5bb688 !important;
}
.el-three .el-tabs__item:hover {
  color: #5bb688 !important;
  cursor: pointer;
}
.duihuan{
    height: 34px;
    width: 1106px;
    margin-left: 10%;
    margin-top: 32px;
    /* background-color: #5bb688 */
}
.duihuan>input{
    height: 20px;
    width: 192px;
    font-size: 13px;
    background: white;
    line-height: 20px;
    padding: 7px 6px;
    border: #d2d2d2 1px solid;
    float: left;
    outline: none;
}
.duihuan>div{
    background: #000;
    margin-left: 10px;
    float: left;
    width: 50px;
    height: 36px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
}
.saying{
    padding-top: 90px;
    margin-bottom: 188px;
    width: 100%;
    height: auto;
}
.saying>p{
    color: #a0a0a0;
    text-align: center;
    font-size: 14px;
    line-height: 48px;
    padding: 0;
}
.card{
   width: 142px!important;
   margin-right: 20px;
}
</style>
