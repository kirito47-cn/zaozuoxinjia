<template>
  <el-carousel indicator-position="outside" height="554px" interval= 3000>
    <el-carousel-item v-for="item in lunbotu" :key="item">
         <img :src="item" alt="" style="height:554px">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import lunbotu1 from "@/assets/home-img/lunbotu1.jpg";
import lunbotu2 from "@/assets/home-img/lunbotu2.jpg";
import lunbotu3 from "@/assets/home-img/lunbotu3.jpg";
import lunbotu4 from "@/assets/home-img/lunbotu4.jpg";
import lunbotu5 from "@/assets/home-img/lunbotu5.jpg";
import lunbotu6 from "@/assets/home-img/lunbotu6.jpg";

export default {
  data() {
    return {
      lunbotu: [lunbotu1,lunbotu2,lunbotu3,lunbotu4,lunbotu5,lunbotu6]
    };
}
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;  
  }
  .el-carousel__item>img{
     
      width:100%
  }
</style>