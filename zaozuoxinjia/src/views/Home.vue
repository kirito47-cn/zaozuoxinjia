<template>
    <div class="header">
      <ul>
        <li class="shitishop">
          <div class="loaction"></div>
          实体店
        </li>
        <li>了解创作新家</li>
        <li>商业合作</li>
      </ul>
    </div>
</template>

<script>

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
.loaction {
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
</style>
