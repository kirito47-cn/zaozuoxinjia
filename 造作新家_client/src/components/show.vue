<template>
  <div class="container">
    <div class="show-title">
      <h2>精选自10万+生活家晒单/证言造作美学</h2>
    </div>
    <div class="show-type">
      <div class="show-type-img">
        <img src="../assets/home-img/show-img1.jpg" alt="" />
        <div class="show-type-info">
          <img src="../assets/home-img/show-typeimg1.jpg" alt="" />
          <p>
            最喜欢的一款手推柜，用来做的床头柜，非常特别，储物功能也非常强大。
          </p>
          <div class="youhuiquan">
            <p>_已获得¥207_</p>
            <p>全场优惠券</p>
          </div>
        </div>
      </div>
      <div class="show-type-img">
        <img src="../assets/home-img/show-img2.jpg" alt="" />
        <div class="show-type-info">
          <img src="../assets/home-img/show-typeimg1.jpg" alt="" />
          <p>
            最喜欢的一款手推柜，用来做的床头柜，非常特别，储物功能也非常强大。
          </p>
          <div class="youhuiquan">
            <p>_已获得¥207_</p>
            <p>全场优惠券</p>
          </div>
        </div>
      </div>
      <div class="show-type-img">
        <img src="../assets/home-img/show-img3.jpg" alt="" />
        <div class="show-type-info">
          <img src="../assets/home-img/show-typeimg1.jpg" alt="" />
          <p>
            最喜欢的一款手推柜，用来做的床头柜，非常特别，储物功能也非常强大。
          </p>
          <div class="youhuiquan">
            <p>_已获得¥207_</p>
            <p>全场优惠券</p>
          </div>
        </div>
      </div>
      <div class="show-type-img">
        <img src="../assets/home-img/show-img4.jpg" alt="" />
        <div class="show-type-info">
          <img src="../assets/home-img/show-typeimg1.jpg" alt="" />
          <p>
            最喜欢的一款手推柜，用来做的床头柜，非常特别，储物功能也非常强大。
          </p>
          <div class="youhuiquan">
            <p>_已获得¥207_</p>
            <p>全场优惠券</p>
          </div>
        </div>
      </div>
      <div class="show-type-img">
        <img src="../assets/home-img/show-img5.jpg" alt="" />
        <div class="show-type-info">
          <img src="../assets/home-img/show-typeimg1.jpg" alt="" />
          <p>
            最喜欢的一款手推柜，用来做的床头柜，非常特别，储物功能也非常强大。
          </p>
          <div class="youhuiquan">
            <p>_已获得¥207_</p>
            <p>全场优惠券</p>
          </div>
        </div>
      </div>
    </div>
    <div class="show-more">
      查看更多晒单
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #fff;
}
.show-title {
  padding-top: 60px;
  border-top: 10px solid #f6f6f6;
  width: 1035px;
  height: 25px;
  /* background-color: aqua; */
  margin: 0 auto;
}
.show-title > h2 {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 3px;
}
.show-type {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1350px;
  height: 268px;
  margin: 0 auto;
  margin-top: 30px;

  /* background-color: blue; */
}
.show-type-img {
  width: 266px;
  height: 266px;
  position: relative;
  /* background-color: rebeccapurple; */
}
.show-type-img > img {
  width: 262px;
  cursor: pointer;
}
.show-more {
  width: 500px;
  height: 50px;
  margin: 40px auto 50px;
  border: #313131 2px solid;
  color: #313131;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}
.show-more:hover {
  background: #313131;
  color: #fff;
}
.show-type-info {
  cursor: pointer;
  display: none;
  width: 266px;
  height: 266px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
}
.show-type-info > img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 21px;
}
.show-type-info > p {
  margin-top: 10px;
  font-size: 12px;
  width: 60%;
  height: 54px;
  margin: 15px auto 0;
  line-height: 18px;
  color: #313131;
  text-align: center;
}
.youhuiquan {
  width: 80px;
  height: 30px;
  padding: 5px 15px;
  margin: 10px auto 0;
  border: transparent 4px solid;
  border-image: -webkit-linear-gradient(30deg, #e9ba70, #ead46e, #e9ba70) 1;
}
.youhuiquan > p {
  display: block;
  height: 15px;
  line-height: 16px;
  font-size: 12px;
  color: #d0aa68;
  text-align: center;
}
.show-type-img:hover .show-type-info {
  display: block;
}
</style>
