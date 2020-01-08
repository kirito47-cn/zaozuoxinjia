<template>
  <div class="content">
    <div class="member-info">
      <img src="../assets/home-img/show-img1.jpg" alt="" />
      <p>{{username}}</p>
      <router-link to="">了解会员体系</router-link>
    </div>
    <div class="zero"></div>
    <h1 class="con-title">成为会员，享受丰富特权</h1>
    <div class="con-type">
      <div class="con-type-c" v-for="(item, index) in welfare" :key="index">
        <div style="position:relative;">
          <img :src="item[0]" alt="" />
          <p>{{ item[1] }}</p>
          <span>{{ item[2] }}</span
          ><br />
          <span>{{ item[3] }}</span>
          <div class="price" v-if="item[4]">{{ item[4] }}</div>
        </div>
      </div>
    </div>
    <h1 class="con-title">完善任意3项资料即可快速成为会员，享受特权</h1>
    <div class="perfect">
      <p>完善个人资料</p>
      <span>了解你多一点，好让造作君为你准备更贴心的惊喜</span>
      <div class="perfect-type">
        <span>设置头像</span>
        <span>设置生日</span>
        <span>设置昵称</span>
        <span>设置性别</span>
      </div>
      <a href="">去设置 ></a>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/home-img/member-img1.png";
import img2 from "../assets/home-img/member-img2.png";
import img3 from "../assets/home-img/member-img3.png";
import img4 from "../assets/home-img/member-img4.png";
import img5 from "../assets/home-img/member-img5.png";
import img6 from "../assets/home-img/member-img6.png";

export default {
  data() {
    return {
      welfare: [
        [img1, "升级礼", "累计¥16000全场券", "低至9折", "¥16000"],
        [img2, "生日礼", "￥400精选实物礼", "全场88折通用券", "¥400"],
        [img3, "专属会员价", "精选商品会员专属优惠", "", "专属折扣"],
        [img4, "晒单返券", "成交价5%全场券奖励", "", "5%"],
        [img5, "会员惊喜", "不定期会员专属活动", "给你惊喜"],
        [img6, "线下活动", "线下活动优先受邀", ""]
      ]
    };
  },
  computed:{
      username(){
        return window.sessionStorage.getItem('username')
      }
  }
};
</script>

<style>
.content {
  width: 100%;
}
.member-info {
  height: 144px;
  width: 1106px;
  margin: 0 auto;
  margin-top: 15px;
  /* background-color: red; */
}
.member-info > img {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  float: left;
  margin: 25px 0 0 50px;
}
.member-info > p {
  float: left;
  margin-top: 30px;
  font-weight: 700;
  font-size: 18px;
  margin: 60px 0 0 40px;
}
.member-info > a {
  display: block;
  width: 158px;
  height: 34px;
  border: #a0a0a0 1px solid;
  border-radius: 5px;
  color: #313131;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
  float: right;
  text-align: center;
  line-height: 34px;
  margin-top: 55px;
}
.member-info > a:hover {
  background: #313131;
  color: #fff;
}
.zero {
  width: 1106px;
  height: 10px;
  background-color: #f6f6f6;
  border-radius: 5px;
  margin: 0 auto;
}
.con-title {
  font-size: 21px;
  font-weight: 700;
  padding-top: 35px;
}
.con-type {
  width: 1106px;
  height: 355px;
  border-radius: 5px;
  border: #d2d2d2 1px solid;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.con-type-c {
  width: 272px;
  height: 120px;
  /* background-color: red; */
  padding-top: 38px;
}
.con-type-c p {
  color: #313131;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
}
.con-type-c span {
  color: #a0a0a0;
  font-size: 13px;
}
.price {
  width: auto;
  height: 24px;
  position: absolute;
  left: 58%;
  top: 0;
  font-size: 15px;
  color: #fff;
  background: #e56a69;
  border-radius: 12px;
  padding: 0 8px;
  line-height: 24px;
  letter-spacing: 2px;
}
.perfect {
  width: 770px;
  height: 148px;
  border: #d2d2d2 1px solid;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 96px;
  padding: 38px 104px;
  box-sizing: border-box;
  text-align: left;
  position: relative;
}
.perfect > p {
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: 700;
}
.perfect > span {
  font-size: 12.8px;
  font-weight: 400;
  color: rgb(160, 160, 160);
}
.perfect-type {
  margin-top: 12px;
  text-align: left;
  color: #707070;
}
.perfect-type > span {
  display: inline-block;
  font-size: 12.8px;
  padding-right: 26px;
}
.perfect-type > span::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background: #707070;
  border-radius: 50%;
  transform: scale(0.4);
}
.perfect>a{
    width: auto;
    height: 24px;
    padding: 6px 22px 6px 27px;
    position: absolute;
    top: 62px;
    right: 100px;
    background: #313131;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    border-radius: 20px;
    letter-spacing: 2px;
    line-height: 24px;
}
.perfect>a:hover{
    background: #000;
}
</style>
