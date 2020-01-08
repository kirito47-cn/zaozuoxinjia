<template>
  <div class="container">
    <div class="show-title">
      <h2>Z Stores 全国实体门店</h2>
    </div>
    <div class="shop-con">
        <div class="shop-img">
            <img src="../assets/home-img/shop-img1.jpg" alt="">
            <h3>上海陆家嘴中心店 | L+MALL 5F-513</h3>
        </div>
        <div class="shop-img">
            <img src="../assets/home-img/shop-img2.jpg" alt="">
            <h3>成都大悦城店 | 大悦城2F-33</h3>
        </div>
    </div>
    <div class="show-more">
          查看全国15家门店
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
.show-more{
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
.shop-con{
    width: 1035px;
    height: 338px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
}
.shop-img{
   width: 507px;
   height: 285px;
}
.shop-img>img{
  width: 507px;
  cursor: pointer;
}
.shop-img>h3{
    font-size: 15px;
    text-align: left;
    padding: 20px 0 10px 10px;
}
.shop-img>img:hover{
  opacity: .8;
}
</style>
