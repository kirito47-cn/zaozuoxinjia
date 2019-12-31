<template>
  <div id="nav">
    <div class="logo">
      <img src="" alt="" />
    </div>
    <ul class="type">
      <li>
        <router-link to="#">首页</router-link>
      </li>
      <li>
        <router-link to="#">椅凳</router-link>
        <div class="type-two">
          <div calss="type-two-con">
            <div v-for="(item, index) in safa" :key="index">
              <img :src="item.img" class="type-two-con-img" />
              <router-link to="">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">茶几</router-link>
      </li>
      <li>
        <router-link to="">沙发</router-link>
      </li>
      <li>
        <router-link to="">床·床具</router-link>
      </li>
      <li>
        <router-link to="">柜架</router-link>
      </li>
      <li>
        <router-link to="">家纺</router-link>
      </li>
      <li>
        <router-link to="">装饰</router-link>
      </li>
      <li>
        <router-link to="">餐具</router-link>
      </li>
      <li>
        <router-link to="">系列</router-link>
      </li>
    </ul>
    <ul class="ringt-nav">
      <li class="shitishop">
        <div class="loaction"></div>
        实体店
      </li>
      <li>了解创作新家</li>
      <li>商业合作</li>
      <li class="person">
        <router-link to=""></router-link>
      </li>
      <li class="shopcar">
        <router-link to=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import home from "../views/Home";
export default {
  data() {
    return {
      safa: [
        {
          img: "shafa-1.png",
          name: "三人沙发"
        },
        {
          img: "shafa-2.png",
          name: "双人沙发"
        },
        {
          img: "shafa-3.png",
          name: "单人沙发"
        },
        {
          img: "shafa-4.png",
          name: "大三人沙发"
        },
        {
          img: "shafa-5.png",
          name: "沙发墩"
        }
      ]
    };
  }
};
</script>

<style>
#nav {
  padding: 0 5% 0 5%;
  display: flex;
  height: 50px;
  background-color: #313131;
  position: relative;
}
.logo {
  width: 24px;
  margin-top: 12px;
  cursor: pointer;
}
.logo > img {
  width: 24px;
  height: 24px;
}
.type {
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 550px;
  height: 45px;
  list-style: none;
  line-height: 50px;
  margin-left: 30px;
}
.type > li > a {
  display: block;
  height: 45px;
  line-height: 50px;
}
.type > li > a {
  color: #fff;
  font-size: 13px;
  text-decoration: none;
}
.type > li > a:hover {
  border-bottom: 1px solid #fff;
}
.ringt-nav {
  width: 400px;
  height: 50px;
  margin-left: 200px;
}
.ringt-nav {
  width: 350px;
  height: 45px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-left: 270px;
}
.ringt-nav > li {
  display: block;
  font-size: 12px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.ringt-nav li:hover {
  border-bottom: 1px solid #fff;
}
.shitishop {
  position: relative;
}
.loaction {
  position: absolute;
  width: 20px;
  height: 20px;
  float: left;
  /* background: url("../assets/home-img/jinglingtu.png"); */
  background-position: -300px -40px;
  transform: scale(0.7);
  margin-top: 15px;
  margin-right: 5px;
  left: -22px;
}
.person {
  width: 25px;
  height: 50px;
  /* background: url("../assets/home-img/person.png") no-repeat; */
  background-size: 100% 47%;
  margin-top: 12px;
}
.shopcar {
  width: 25px;
  height: 50px;
  /* background: url("../assets/home-img/shopcar.png") no-repeat; */
  background-size: 100% 47%;
  margin-top: 12px;
}
.person:hover {
  width: 25px;
  height: 50px;
  /* background: url("../assets/home-img/person-hover.png") no-repeat; */
  background-size: 100% 47%;
  margin-top: 12px;
}
.shopcar:hover {
  width: 25px;
  height: 50px;
  /* background: url("../assets/home-img/shopcar-hover.png") no-repeat; */
  background-size: 100% 47%;
  margin-top: 12px;
}
.type-two {
  display: block;
  height: 112px;
  width: 100%;
  position: absolute;
  top: 49px;
  left: 0;
  background: rgba(49, 49, 49, 0.95);
  text-align: center;
}
.type > li:hover .type-two {
  display: block;
}
.type-two:hover .type-two {
  display: block;
}
.type-two-con {
  width: 100%;
  height: 112px;
  display: flex;
  flex-wrap: nowrap;
}
.type-two-con-img {
  width: 55px;
}
.type-two-con > a {
  display: block;
  width: 55px;
  height: 100%;
}
</style>
