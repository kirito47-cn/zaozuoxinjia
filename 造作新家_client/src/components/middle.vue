<template>
     <div class="contonner">
         <div class="middle-nav">
             <img class="middle1" src="../assets/home-img/middle-img1.jpg" alt="">
             <div class="middle2">
                 <div class="middle3">
                     <img src="../assets/home-img/middle-img2.jpg" alt="">
                     <img src="../assets/home-img/middle-img3.jpg" alt="">
                 </div>
                 <img class="middle4" src="../assets/home-img/middle-img4.jpg" alt="">
             </div>
         </div>
     </div>
</template>

<script>
export default {
}
</script>

<style>
.contonner {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #fff;
}
.middle-nav{
    width: 1024px;
    height: 344px;
    /* background-color: blue; */
    margin: 0 auto;   
    margin-top: 140px;
    display: flex;
    flex-wrap: nowrap; 
    justify-content: space-between
}
.middle1{
    width: 530px;
    height: 344px;
}
.middle2{
    width: 494px;
    height: 344px;
    /* background-color: aqua */
}
.middle3{
    height: 168px;
    width: 494px;
    /* background-color:red; */
    display: flex;
    justify-content: space-around;
    padding-left: 5px;
}
.middle3>img{
    width: 240px;
    height: 168px;
}
.middle4{
    width: 487px;
    height: 168px;
    margin-top: 8px;
    margin-left: 8px;
}
</style>