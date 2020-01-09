<template>
    <div class="service">
        <div class="service-con">
            <router-link to="">
                 <div class="qianyue"></div>
                 <p>27国/百位设计大师的<br>
                   <span><b>签约</b>正品</span>
                 </p>
            </router-link>
            <router-link to="">
                 <div class="qianyue zhizao"></div>
                 <p>100+精工大厂/100%手检<br>
                   <span><b>欧标</b>制造</span>
                 </p>
            </router-link>
            <router-link to="">
                 <div class="qianyue peisong"></div>
                 <p>满¥199<br>
                   <span><b>免费</b>配送</span>
                 </p>
            </router-link>
            <router-link to="">
                 <div class="qianyue jiaofu"></div>
                 <p>延期高利补偿/确保<br>
                   <span><b>准时</b>交付</span>
                 </p>
            </router-link>
            <router-link to="">
                 <div class="qianyue baojia"></div>
                 <p>价格保障/变动返差价<br>
                   <span><b>7日</b>保价</span>
                 </p>
            </router-link>
            <router-link to="">
                 <div class="qianyue tuihuan"></div>
                 <p>三年质保<br>
                   <span><b>7日</b>退换</span>
                 </p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.service{
    margin-top: 60px;
    height: 211px;
    width: 100%;
    background: url("../assets/home-img/service-bg.jpg") no-repeat center;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: table;
}
.service-con{
    width:  1035px;
    height: 152px;
    /* background-color: #fff; */
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between
}
.service-con>a{
      width: 172px;
      height: 152px;
      /* background-color: aqua; */
}
.service-con>a>p:hover{
  color: #dedede;
}
.qianyue{
    width: 64px;
    height: 64px;
    margin: 0 auto;
    background: url("../assets/home-img/service-1.png") no-repeat;
    background-size: auto 128px;
}
.zhizao{
   background-position: -62px 0;
}
.peisong{
    background-position: -128px 0;
}
.jiaofu{
    background-position: -192px 0;
}
.baojia{
    background-position: -254px 0;
}
.tuihuan{
    background-position: -320px 0;
}
.service-con p{
    padding-top: 20px;
    color: #fff;
    font-size: 13px;
    line-height: 25px;
}
.service-con p>span{
    display: inline-block;
    font-size: 26px;
    font-weight: 400;
    letter-spacing: 10px;
}
</style>