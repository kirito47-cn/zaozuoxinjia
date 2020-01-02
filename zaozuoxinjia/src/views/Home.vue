<template>
  <div>
    <mynav></mynav>
    <div class="header">
      <ul>
        <li class="shitishop">
          <div class="loaction1"></div>
          实体店
        </li>
        <li>了解创作新家</li>
        <li>商业合作</li>
      </ul>
    </div>
    <div class="head-nav">
      <div class="title">
        <img src="../assets/home-img/title.png" alt="" />
        <div class="login-right">
          <router-link to="/login" class="login-right-l">
            <img class="login-show" src="../assets/home-img/login.png" alt="" />
            <img class="login-hover"
              style="display:none;"
              src="../assets/home-img/login-hover.png"
              alt=""
            />
          </router-link>
          <router-link to="" class="shopcar-right">
            <img class="shopcar-show" src="../assets/home-img/goodscar.png" alt="" />
            <img class="shopcar-hover"
              style="display:none;"
              src="../assets/home-img/goodscar-hover.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <ul class="head-nav-con">
        <li>
          <router-link to="" class="head-con-shouye">首页</router-link>
        </li>
        <li>
          <router-link to="">沙发</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in safa" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">凳椅</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in desk" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">茶几</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">床·床具</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">柜架</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">灯具</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">家纺</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">装饰</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="">餐具</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
          <router-link to="">系列</router-link>
          <div class="head-type">
            <div class="head-type-con">
              <router-link to="" v-for="(item, index) in chaji" :key="index">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <lunbotu></lunbotu>
    <div class="contonner">
      <div class="contonner-title">
        <h2 class="c-t-c">造作xPAGEONE 联合手选2020设计清单</h2>
        <p class="c-t-p">即日起，购入以下产品，即得2020美好赠书</p>
      </div>
      <div class="contonner-goods">
        <router-link
          to=""
          v-for="(item, index) in test"
          :key="index"
          class="goods-con"
        >
          <router-link to="">
            <img src="../assets/home-img/shafa-1.jpg" alt="" />
          </router-link>
          <div class="goods-info">
            <p>气球沙发</p>
            <span>2599</span>
            <div class="goods-color">3色可选</div>
          </div>
          <div class="goods-hover">
            <div class="g-h-top">
              <div class="g-h-top-txt">3色饱满气球，系住心中少年</div>
            </div>
            <div class="g-h-bottom">
              <span>Claesson Koivisto Rune</span>
              <p>Sweden | Stockholm</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div style="height:45px;"></div>
    <div class="contonner">
      <div class="contonner-title">
        <h2 class="c-t-c">2020新年惊艳待客必备清单</h2>
        <p class="c-t-p">各类美好小物5折起，精致新年由此开始</p>
      </div>
      <div class="contonner-goods">
        <router-link
          to=""
          class="goods-con"
          v-for="(item, index) in test"
          :key="index"
        >
          <router-link to="">
            <img src="../assets/home-img/shafa-1.jpg" alt="" />
          </router-link>
          <div class="goods-info">
            <p>气球沙发</p>
            <span class="red"
              >63
              <i>￥69</i>
            </span>
            <div class="goods-color-box">
              <div class="goods-color">3色可选</div>
              <div class="color-red">新年好礼</div>
            </div>
          </div>
          <div class="goods-hover">
            <div class="g-h-top">
              <div class="g-h-top-txt">3色饱满气球，系住心中少年</div>
            </div>
            <div class="g-h-bottom">
              <span>Claesson Koivisto Rune</span>
              <p>Sweden | Stockholm</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <middle></middle>
    <service></service>
    <div class="contonner">
      <div class="contonner-title">
        <h2 class="c-t-c">全品目录/签名设计正品</h2>
        <!-- <p class="c-t-p">即日起，购入以下产品，即得2020美好赠书</p> -->
      </div>
      <div class="menu-shafa">
        <div class="menu-name">沙 发</div>
        <div class="menu-type">
          <router-link to="">单人沙发 </router-link>
          <router-link to="">双人沙发 </router-link>
          <router-link to="">三人沙发 </router-link>
          <router-link to="">大三人沙发 </router-link>
          <router-link to="">沙发墩 </router-link>
        </div>
      </div>
      <div class="contonner-goods">
        <router-link to="" v-for="(item, index) in test2" :key="index" class="goods-con">
          <router-link to="">
            <img src="../assets/home-img/shafa-1.jpg" alt="" />
          </router-link>
          <div class="goods-info">
            <p>气球沙发</p>
            <span>2599</span>
            <div class="goods-color">3色可选</div>
          </div>
          <div class="goods-hover">
            <div class="g-h-top">
              <div class="g-h-top-txt">3色饱满气球，系住心中少年</div>
            </div>
            <div class="g-h-bottom">
              <span>Claesson Koivisto Rune</span>
              <p>Sweden | Stockholm</p>
            </div>
          </div>
        </router-link>
        <router-link to="" class="more">
            <div class="more-goods">
              <p style="margin-top:35px;">更多</p>
              <p class="more-num">
                <span>20</span>
                款沙发
              </p>
            </div>
        </router-link>
      </div>
    </div>
    <div style="height:45px;"></div>
    <div class="contonner">
      <!-- <div class="contonner-title"> -->
        <!-- <h2 class="c-t-c">全品目录/签名设计正品</h2> -->
        <!-- <p class="c-t-p">即日起，购入以下产品，即得2020美好赠书</p> -->
      <!-- </div> -->
      <div class="menu-shafa">
        <div class="menu-name">沙 发</div>
        <div class="menu-type">
          <router-link to="">单人沙发 </router-link>
          <router-link to="">双人沙发 </router-link>
          <router-link to="">三人沙发 </router-link>
          <router-link to="">大三人沙发 </router-link>
          <router-link to="">沙发墩 </router-link>
        </div>
      </div>
      <div class="contonner-goods">
        <router-link to="" v-for="(item, index) in test2" :key="index" class="goods-con">
          <router-link to="">
            <img src="../assets/home-img/shafa-1.jpg" alt="" />
          </router-link>
          <div class="goods-info">
            <p>气球沙发</p>
            <span>2599</span>
            <div class="goods-color">3色可选</div>
          </div>
          <div class="goods-hover">
            <div class="g-h-top">
              <div class="g-h-top-txt">3色饱满气球，系住心中少年</div>
            </div>
            <div class="g-h-bottom">
              <span>Claesson Koivisto Rune</span>
              <p>Sweden | Stockholm</p>
            </div>
          </div>
        </router-link>
        <router-link to="" class="more">
            <div class="more-goods">
              <p style="margin-top:35px;">更多</p>
              <p class="more-num">
                <span>20</span>
                款沙发
              </p>
            </div>
        </router-link>
      </div>
    </div>
    <div style="height:45px;"></div>
    <show></show>
    <shop></shop>
    <bottom></bottom>
  </div>
</template>

<script>
import lunbotu from "../components/lunbotu";
import middle from "../components/middle";
import service from "../components/service";
import show from "../components/show";
import shop from "../components/shop";
import bottom from "../components/bottom";
import mynav from "../components/nav";
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
      ],
      desk: [
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
      ],
      test: [1, 2, 3, 4, 5, 6, 7, 8],
      test2: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11]
    };
  },
  components: {
    lunbotu: lunbotu,
    middle: middle,
    service: service,
    show:show,
    shop:shop,
    bottom:bottom,
    mynav:mynav
  }
};
</script>

<style>
.header {
  height: 36px;
  background-color: #313131;
}
.header > ul {
  width: 300px;
  height: 33px;
  float: right;
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-right: 150px;
}
.header > ul > li {
  display: block;
  font-size: 12px;
  color: #fff;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
}
.header > ul > li:hover {
  border-bottom: 1px solid #fff;
}
.shitishop {
  position: relative;
}
.loaction1 {
  position: absolute;
  width: 20px;
  height: 20px;
  float: left;
  background: url("../assets/home-img/jinglingtu.png");
  background-position: -300px -40px;
  transform: scale(0.7);
  margin-top: 5px;
  margin-right: 5px;
  left: -22px;
}
.head-nav {
  height: 148px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  margin-top: 36px;
  position: relative;
}
.title {
  width: 1035px;
  position: relative;
  margin: 0 auto;
}
.login-right {
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  top: 0;
  color: #000;
  width: 100px;
  height: 36px;
  font-size: 13px;
  line-height: 36px;
  margin-top: 15px;
  margin-right: 10px;
}
.login-right > a > img {
  width: 25px;
  height: 25px;
}
.login-right-l:hover .login-show{
  display: none!important;
}
.login-right-l:hover .login-hover{
  display: block!important;
}
.shopcar-right:hover .shopcar-show{
  display: none!important;
}
.shopcar-right:hover .shopcar-hover{
  display: block!important;
}
.head-nav-con {
  list-style: none;
  justify-content: space-around;
  display: flex;
  width: 100%;
  margin: 40px auto 0;
  text-align: center;
  width: 830px;
  height: 32px;
  z-index: 100;
}
.head-nav-con > li {
  display: block;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 32px;
}
.head-nav-con > li > a {
  font-size: 14px;
  color: #313131;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 5px;
}
.head-con-shouye{
  border-bottom: 3px solid #000
}
.head-type {
  width: 100%;
  height: 122px;
  background: #fff;
  opacity: 0.95;
  position: absolute;
  left: 0;
  top: 130px;
  display: none;
  z-index: 10000;
}
.head-nav-con > li:hover .head-type {
  display: block;
}
.head-type-con {
  /* display: flex;
  justify-content: space-around;
  flex-wrap: nowrap; */
  margin: 0 auto;
  height: 100%;
}
.head-type-con > a {
  display: inline-block;
  width: 55px;
  height: 75px;
  /* background-color: #fff; */
  text-decoration: none;
  margin: 10px 40px 10px 0px;
}
.head-type-con > a > img {
  width: 65px;
}
.head-type-con > a > p {
  width: 60px;
  color: #a0a0a0;
  font-size: 12px;
  margin-top: -10px;
  text-align: center;
}
.head-type-con>a>p:hover{
  color: #000;
  font-weight:bold;
}
.contonner {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #fff;
}
.contonner-title {
  width: 1035px;
  height: 52px;
  /* background-color: #a0a0a0; */
  margin: 0 auto;
  margin-top: 60px;
}
.c-t-c {
  font-size: 24px;
  line-height: 24px;
  display: block;
  font-weight: 700;
  letter-spacing: 3px;
}
.c-t-p {
  color: #707070;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  margin-top: 5px;
}
.contonner-goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1035px;
  margin: 0 auto;
}
.goods-con {
  width: 244px;
  height: 322px;
  margin: 20px 14px 0 0;
  position: relative;
  /* background-color: aqua; */
}
.goods-con > a {
  width: 244px;
  height: 244px;
}
.goods-con > a > img {
  height: 244px;
  width: 100%;
  margin: 0 auto;
}
.goods-info {
  width: 244px;
  height: 75px;
  color: #000;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
}
.goods-info > p {
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info > span::before {
  content: "¥";
  font-weight: 400;
  display: inline-block;
  padding-right: 2px;
}
.goods-info > .red::before {
  content: "¥";
  font-weight: 400;
  display: inline-block;
  padding-right: 2px;
  color: #e56a69;
}
.goods-info > span {
  font-family: buenosaires, sans-serif !important;
  font-weight: 700;
}
.goods-info > .red {
  font-family: buenosaires, sans-serif !important;
  font-weight: 700;
  color: #e56a69;
}
.red > i {
  font-family: buenosaires, sans-serif !important;
  font-weight: 400;
  display: inline-block;
  color: #a0a0a0;
  font-size: 12px;
  text-decoration: line-through;
}
.goods-color {
  width: 55px;
  height: 21px;
  background-color: rgb(246, 246, 246);
  font-size: 12px;
  color: rgb(112, 112, 112);
  margin: 0 auto;
}
.color-red {
  width: 55px;
  height: 21px;
  background-color: rgb(255, 237, 237);
  font-size: 12px;
  color: rgb(229, 106, 105);
}
.goods-hover {
  width: 244px;
  height: 322px;
  /* background-color: rgba(255, 255, 255, 0.7); */
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.g-h-top {
  border-bottom: 1px solid #ccc;
  width: 244px;
  height: 244px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-h-top-txt {
  padding: 15px 8px;
  width: 148px;
  font-size: 15px;
  line-height: 21px;
  color: #373737;
  text-align: center;
  border: 5px solid #535353;
}
.g-h-bottom {
  background-color: white;
  height: 75px;
}
.g-h-bottom > span {
  display: inline-block;
  margin-top: 15px;
  font-weight: 700;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #313131;
  font-family: buenosaires, sans-serif !important;
}
.g-h-bottom > p {
  font-family: buenosaires, sans-serif !important;
  color: #000;
  text-align: center;
}
.goods-con:hover .goods-hover {
  background-color: rgba(255, 255, 255, 0.7);
  display: block;
}
.goods-color-box {
  display: flex;
  width: 112px;
  margin: 0 auto;
}
.menu-shafa {
  height: 50px;
  width: 1035px;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 50px;
  border-bottom: 1px solid #d2d2d2;
  text-align: right;
  /* background-color: yellow; */
}
.menu-name {
  float: left;
  font-weight: 600;
}
.menu-type {
  float: right;
  font-size: 18px;
  height: 50px;
}
.menu-type > a {
  padding: 0 10px;
  color: #000;
  font-size: 13px;
  font-weight: 400;
  position: relative;
}
.menu-type > a:hover{
  color: #a0a0a0;
}
.menu-type > a::before {
  content: "";
  width: 1px;
  height: 10px;
  background: #d2d2d2;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -5px;
}
.more{
  width: 244px;
  height: 322px;
  /* background-color: #e56a69 */
}
.more-goods{
    width: 150px;
    height: 150px;
    border: 9px solid #707070;
    /* background-color: violet; */
    margin: 0 auto;
    margin-top: 86px;
}
.more-goods:hover{
    color: #707070;
    border-color: #a0a0a0;
}
.more-num{
  font-size: 20px;
   margin-top: 20px;
}
.more-num>span{
    font-size: 24px
}
</style>
