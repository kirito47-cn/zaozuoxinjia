<template>
  <div style="width:100%;height:auto">
    <div class="ass-title">
      <h1>马上晒单，成为造作生活家，获得最多5%的全场优惠券</h1>
      <p>下载造作新家App，晒出你的造作生活，全场优惠券等你拿</p>
      <div class="erwerma">
        <img src="../assets/home-img/erwerma.png" alt="" />
        <p>扫码下载造作新家App</p>
      </div>
    </div>
    <div class="fuli">
      <div class="fuli1">
        <h2>福利一</h2>
        <p>
          确认收货后，发布不少于30个字和2张美图的晒单，即可获得对应商品成交价1%的无门槛优惠券，加入精选再得2%的无门槛优惠券
        </p>
      </div>
      <div class="fenge"></div>
      <div class="fuli1 fuli2">
        <h2>福利一</h2>
        <p>
          在小红书、好好住上晒出你的造作好物，带上“造作新家”标签，截图给客服或客户经理，分别获得对应商品成交价各1%的无门槛优惠券
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ass-title {
  width: 1106px;
  height: 112px;
  margin: 0 auto;
  margin-top: 55px;
  position: relative;
}
.ass-title > h1 {
  font-size: 26px;
  line-height: 42px;
  font-weight: 400;
  text-align: left;
  color: #313131;
  letter-spacing: 1px;
}
.ass-title > p {
  font-size: 18px;
  line-height: 30px;
  color: #313131;
  text-align: left;
  letter-spacing: 1px;
}
.fuli {
  width: 1106px;
  height: 138px;
  margin: 0 auto;
  margin-bottom: 200px;
}
.fuli1 {
  width: 30%;
  height: 120px;
  float: left;
  text-align: left;
}
.fuli1 > h2 {
  color: #000;
  font-size: 20px;
}
.fuli1 > p {
  width: 80%;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  padding-top: 10px;
}
.fenge {
  width: 2px;
  height: 100%;
  background-color: #d2d2d2;
  float: left;
}
.fuli2 {
  margin-left: 50px;
}
.erwerma {
  width: 135px;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  margin-bottom: 70px;
}
.erwerma > img {
  width: 100%;
  height: auto;
}
.erwerma > p {
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
}
</style>
