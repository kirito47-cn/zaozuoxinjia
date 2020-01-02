<template>
  <div>
    
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
          <router-link to="/login">
            <img src="../assets/home-img/login.png" alt="" />
            <img
              style="display:none;"
              src="../assets/home-img/login-hover.png"
              alt=""
            />
          </router-link>
          <router-link to="">
            <img src="../assets/home-img/goodscar.png" alt="" />
            <img
              style="display:none;"
              src="../assets/home-img/goodscar-hover.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <ul class="head-nav-con">
          <li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div class="head-type-con">
                  <router-link to="" v-for="(item, index) in safa" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{ item.name }}</p>
                  </router-link>
                </div>
            </div>
          </li>
          <li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li><li>
            <router-link to="">沙发</router-link>
            <div class="head-type">
                <div>
                  <router-link to="">
                    <img src="" alt="">
                    <p></p>
                  </router-link>
                </div>
            </div>
          </li>
      </ul>
    </div>
    <div style="height:1000px"></div> 
    
    
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      scroll:0,
     
      
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
      ]
    };
  }
}
</script>

<style>
.header {
  height: 36px;
  background-color: #313131;
  /* position: fixed; */
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
.login-right>a>img{
    width: 25px;
    height: 25px;
}

.head-nav-con{
  list-style: none;
  justify-content: space-around;
    display: flex;
    width: 100%;
    margin: 40px auto 0;
    text-align: center;
    width: 830px;
    height: 32px;
}
.head-nav-con>li{
    display: block;
    width: 50px;
    height: 32px;
    text-align: center;
    line-height: 32px;
}
.head-nav-con>li>a{
      font-size: 14px;
    color: #313131;
    font-weight: 700;
    text-decoration: none;
}
.head-type{
  width: 100%;
  height: 122px;
  /* background-color: red; */
  position: absolute;
  left: 0;
  top: 130px;
  display: none
}
.head-nav-con>li:hover .head-type{
  display: block
}
.head-type-con{
  /* display: flex;
  justify-content: space-around;
  flex-wrap: nowrap; */
  margin: 0 auto;
  height: 100%;
}
.head-type-con>a{
  display: inline-block;
  width: 55px;
  height: 75px;
  /* background-color: #fff; */
  text-decoration: none;
  margin: 10px 40px 10px 0px;
}
.head-type-con>a>img{
    width: 65px;
}
.head-type-con>a>p{
  width: 60px;
  color: #a0a0a0;
  font-size: 12px;
  margin-top: -10px;
  text-align: center;
}
</style>
