<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/home-img/logo.png" alt="" />
    </div>
    <ul class="type">
      <li>
        <router-link to="">首页</router-link>
      </li>
      <li>
        <router-link to="">沙发</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">椅凳</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in desk" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">茶几</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in chaji" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">床·床具</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">柜架</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">家纺</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">装饰</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">餐具</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <router-link to="">系列</router-link>
        <div class="typetwo">
          <div class="typetwo-con">
            <router-link to="" v-for="(item, index) in safa" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </div>
        </div>
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
        <router-link to="/login"></router-link>
      </li>
      <li class="shopcar">
        <router-link to=""></router-link>
      </li>
    </ul>
  </div>
</template>

<style>
#nav {
  padding: 0 5% 0 5%;
  display: flex;
  height: 50px;
  background-color: #313131;
  position: relative;
  display: none;
  flex-wrap: nowrap;
  width: 100%;
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
  height: 50px;
  list-style: none;
  line-height: 50px;
  margin-left: 30px;
  z-index: 1000;
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
.ringt-nav {
  width: 400px;
  height: 50px;
  margin-left: 200px;
}
.ringt-nav {
  width: 350px;
  height: 50px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-left: 270px;
}
.ringt-nav > li {
  display: block;
  font-size: 12px;
  color: #fff;
  line-height: 45px;
  height: 45px;
  text-align: center;
  cursor: pointer;
}
.ringt-nav > li>a{
  display: block;
  width: 25px;
  height: 25px;
}
.shitishop {
  position: relative;
}
.loaction {
  position: absolute;
  width: 20px;
  height: 20px;
  float: left;
  background: url("../assets/home-img/jinglingtu.png");
  background-position: -300px -40px;
  transform: scale(0.7);
  margin-top: 11px;
  margin-right: 5px;
  left: -22px;
}
.person {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/person.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
  border-bottom: none !important;
}
.shopcar {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/shopcar.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
  border-bottom: none !important;
}
.person:hover {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/person-hover.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
}
.shopcar:hover {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/shopcar-hover.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
}
.typetwo {
  display: none;
  position: absolute;
  left: 0;
  top: 43px;
  height: 112px;
  width: 100%;
  background-color: rgba(49, 49, 49, 0.95);
  z-index: 100;
}
.typetwo-con {
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.typetwo-con > a {
  height: 95px;
  width: 55px;
  text-decoration: none;
  margin-right: 40px;
}
.typetwo-con > a > img {
  width: 55px;
}
.typetwo-con > a > p {
  width: 60px;
  color: #d2d2d2;
  font-size: 12px;
  margin-top: -30px;
  text-align: center;
}
.type > li:hover .typetwo {
  display: block;
}
.typetwo-con > a:hover .typetwo-con > a > p {
  color: #fff;
}
.type > li:nth-child(1) > a {
  border-bottom: 1px solid #fff;
}
.ringt-nav > li:hover {
  border-bottom: 1px solid #fff;
}
.type > li > a:hover {
  color: #ccc;
}
.typetwo-con > a > p:hover {
  color: #fff;
}
</style>

<script>
import home from "../views/Home";
export default {
  data() {
    return {
      safa: [
        {
          img: "all.png",
          name: "全部"
        },
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
      ],
      desk: [
        {
          img: "all.png",
          name: "全部"
        },
        {
          img: "desk-1.png",
          name: "座椅"
        },
        {
          img: "desk-2.png",
          name: "坐墩"
        },
        {
          img: "desk-3.png",
          name: "休闲椅"
        },
        {
          img: "desk-4.png",
          name: "凳子"
        }
      ],
      chaji: [
        {
          img: "all.png",
          name: "全部"
        },
        {
          img: "chaji-1.png",
          name: "书桌·餐组"
        },
        {
          img: "chaji-2.png",
          name: "茶几"
        },
        {
          img: "chaji-3.png",
          name: "边几"
        },
        {
          img: "chaji-4.png",
          name: "梳妆台"
        }
      ]
    };
  }

};
</script>
