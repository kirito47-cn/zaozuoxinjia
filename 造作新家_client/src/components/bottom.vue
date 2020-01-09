<template>
  <div class="footer">
    <div class="footer-con">
      <div class="footer-con-c">
        <div class="footer-left">
          <img src="../assets/home-img/footer-logo.png" alt="" />
          <span>zaozuo.com</span>
          <div class="footer-vx">
            <router-link to="" class="vx"></router-link>
            <router-link to="" class="wb"></router-link>
          </div>
        </div>
        <div class="footer-mid">
          <ul class="footer-mid-c">
            <li>
              <router-link to="" class="about">关于造作新家</router-link>
              <router-link to="">团队介绍</router-link>
              <router-link to="">设计师团</router-link>
              <router-link to="">媒体报道</router-link>
              <router-link to="">加入造作新家</router-link>
              <router-link to="">Designer Hiring</router-link>
            </li>
            <li>
              <router-link to="" class="about">服务支持</router-link>
              <router-link to="">服务保障</router-link>
              <router-link to="">用户协议</router-link>
              <router-link to="">物流售后服务</router-link>
            </li>
            <li>
              <router-link to="" class="about">商业合作</router-link>
              <router-link to="">集合采购</router-link>
              <router-link to="">伙伴加盟</router-link>
              <router-link to="">品牌合作</router-link>
              <router-link to="">媒体合作</router-link>
              <router-link to="">设计师入驻</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-right">
          <div class="f-r-c">
            <span>联系我们</span>
            <p>
              400-6636-926
              <span class="f-time">（9:00~21:00）</span>
            </p>
            <div class="footer-kf">在线客服</div>
            <div class="footer-shop">造作新家全国实体店 ></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="company">
          Copyright © 2018 zaozuo.com Inc.All Rights Reserved.
          北京造化科技有限公司
        </p>
        <p>
          版权所有 京ICP备14049641号-1 增值电信业务经营许可证：京ICP证150098号
        </p>
        <p>造作新家官网-全球设计师创作家居品牌</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding: 90px 0 70px;
  background: #1b1b1b;
  height: auto;
  width: 100%;
  text-align: center;
  font-size: 13px;
  position: absolute;
  /* bottom: 0 */
}
.footer-con {
  width: 1080px;
  height: 363px;
  margin: 0 auto;
}
.footer-con-c {
  width: 100%;
  height: 225px;
  display: flex;
  justify-content: space-between;
}
.footer-left {
  width: 215px;
  height: 225px;
}
.footer-left > img {
  width: 200px;
  height: 20px;
}
.footer-left > span {
  display: block;
  font-family: buenosaires, sans-serif !important;
  color: #fff;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
  letter-spacing: 1px;
  padding-left: 8px;
}
.footer-vx {
  width: 215px;
  height: 67px;
}
.vx {
  width: 36px;
  height: 36px;
  float: left;
  margin-top: 35px;
  border: #fff 2px solid;
  background: url("../assets/home-img/footer-bg.png");
  background-position: -72px 0;
  margin-left: 5px;
  border-radius: 50%;
}
.vx:hover {
  background: url("../assets/home-img/vx-hover.png");
  background-position: -252px -0px;
  background-color: #fff;
}
.wb {
  width: 36px;
  height: 36px;
  float: left;
  margin-top: 35px;
  border: #fff 2px solid;
  background: url("../assets/home-img/footer-bg.png");
  background-position: -108px 0;
  margin-left: 15px;
  border-radius: 50%;
}
.wb:hover {
  background: url("../assets/home-img/vx-hover.png");
  background-position: -288px -0px;
  background-color: #fff;
}
.footer-mid::before {
  content: "";
  width: 1px;
  height: 188px;
  float: left;
  margin-top: 12px;
  background: #a0a0a0;
}
.footer-mid {
  width: 518px;
  height: 225px;
}
.footer-mid-c {
  width: 465px;
  height: 221px;
  /* margin: 0 auto; */
  display: flex;
}
.footer-mid-c > li {
  list-style: none;
  margin: 0 40px;
  text-align: left;
}
.about {
  width: auto;
  display: inline-block;
  margin-bottom: 10px;
  color: #a0a0a0 !important;
  line-height: 40px;
  border-bottom: #a0a0a0 1px solid;
}
.footer-mid-c > li > a {
  color: #d2d2d2;
  display: block;
  line-height: 34px;
  white-space: nowrap;
}
.footer-mid-c > li > a:hover {
  color: #fff;
}
.footer-right::before {
  content: "";
  width: 1px;
  height: 188px;
  float: left;
  margin-top: 12px;
  background: #a0a0a0;
}
.footer-right {
  width: 323px;
  height: 221px;
}
.f-r-c {
  width: 277px;
  height: 189px;
  float: right;
  text-align: left;
}
.f-r-c > span {
  line-height: 30px;
  padding-top: 5px;
  color: #a0a0a0;
}
.f-r-c > p {
  font-size: 22px;
  line-height: 32px;
  font-weight: 400;
  font-family: buenosaires, sans-serif !important;
  color: white;
}
.f-time {
  /* display: inline-block; */
  font-size: 14px;
  margin-left: 20px;
  vertical-align: top;
  float: right;
}
.footer-kf {
  width: 80px;
  height: 28px;
  margin: 10px 0 15px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  border-radius: 14px;
}
.footer-kf:hover {
  background: #fff;
  color: #000;
}
.footer-shop {
  width: 268px;
  height: 42px;
  margin-top: 30px;
  background: #fff;
  border: transparent 1px solid;
  font-size: 13px;
  line-height: 41px;
  color: #000;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
}
.footer-shop:hover {
  border-color: #fff;
  background: transparent;
  color: #fff;
}
.footer-bottom {
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 35px;
  border-top: #a0a0a0 1px solid;
  color: #a0a0a0;
}
.footer-bottom > p {
  padding-top: 5px;
}
.company {
  font-size: 14px;
}
</style>
