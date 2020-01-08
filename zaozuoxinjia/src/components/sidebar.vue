<template>
  <div class="side">
    <div class="gift"></div>
    <div class="sidebar-bg download">
      <p>下载App</p>
    </div>
    <div class="fenge"></div>
    <div class="sidebar-bg siderbar-kf">
      <p>客服</p>
    </div>
    <div class="fenge"></div>
    <a href="#" class="sidebar-bg back">
      <p>回顶部</p>
    </a>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.side {
  width: 86px;
  height: auto;
  position: fixed;
  bottom: 12%;
  right: 0px;
  z-index: 100000;
  background-color: rgba(255, 255, 255, 0.9);
  border: #a0a0a0 1px solid;
  zoom: 0.8;
  cursor: pointer;
}
.gift {
  width: 86px;
  height: 134px;
  width: 86px;
  background: url("../assets/home-img/sidebar-img1.png") no-repeat;
  background-size: cover;
  transition: 0.3s opacity;
}
.gift:hover {
  opacity: 0.8;
}
.sidebar-bg {
  width: 70px;
  height: 70px;
  display: block;
  margin-top: 7px;
  margin-left: 5px;
  margin-bottom: 30px;
  background: url("../assets/home-img/sidebar-bg.png") no-repeat;
  position: relative;
}
.download {
  background-position: -1260px 0;
}
.download:hover {
  background-position: -1190px 0;
}
.sidebar-bg > p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: #707070;
  text-align: center;
  position: absolute;
  bottom: -20px;
  left: 0px;
}
.fenge {
  width: 40px;
  height: 1.25px;
  background: #acacac;
  margin: 0 auto;
}
.siderbar-kf {
  background-position: -980px 0;
}
.siderbar-kf:hover {
  background-position: -700px 0;
}
.back {
  background-position: -1050px 0;
  display: none;
}
.back:hover {
  background-position: -770px 0;
}
</style>
