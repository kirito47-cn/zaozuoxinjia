<template>
  <div id="nav" ref="nav">
    <div class="logo">
      <img src="../assets/home-img/logo.png" alt="" />
    </div>
    <ul class="type" >
      <li v-for='(item,index) of types' :key="index">
        <router-link :to="item.url">{{item.name}}</router-link>
        <div class="typetwo" v-show='index>=1'>
          <div class="typetwo-con" >
            <router-link  v-for="(item1, index1) in item.secname" :to="item.url+item1.url" :key="index1">
              <img :src="item1.img" alt="" />
              <p>{{ item1.name }}</p>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
    <ul class="ringt-nav">
      <li class="shitishop">
        <div class="loaction"></div>
        实体店
      </li>
      <li>了解创作新家</li>
      <li>商业合作</li>
      <li class="person">
        <router-link to="/personal"></router-link>
      </li>
    
      <li class="shopcar"  @click="tocart">
        <!-- 右上角的红点 -->
          <el-badge :value="cartNum" class="item" v-show="cartNum>0"> 
          <router-link to="/cart"></router-link>
           </el-badge>
      </li>
   
    
    </ul>
     <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import home from "../views/Home";
export default {
  data:function() {
    return {
      // cartnum:10,
      types:[
        {
          name:'首页',
          url:'/',
          secname:[]
        },
        {
          url:'/sofa',
          name:'沙发',
          secname: [
            {
              img: "all.png",
              name: "全部",
              url:'/all'
            },
            {
              img: "shafa-1.png",
              name: "三人沙发",
              url:'/triple'

            },
            {
              img: "shafa-2.png",
              name: "双人沙发",
              url:'/double'

            },
            {
              img: "shafa-3.png",
              name: "单人沙发",
              url:'/single'

            },
            {
              img: "shafa-4.png",
              name: "大三人沙发",
              url:'/bigtrip'

            },
            {
              img: "shafa-5.png",
              name: "沙发墩",
              url:'/sofadon'
            }
          ]
        },
        { 
          url:'/chair',
          name:'椅凳',
          secname: [
            {
              img: "all.png",
              name: "全部",
              url:'/all'
            },
            {
              img: "desk-1.png",
              name: "座椅",
              url:'/zuoyi'

            },
            {
              img: "desk-2.png",
              name: "坐墩",
              url:'/zuodun'

            },
            {
              img: "desk-3.png",
              name: "休闲椅",
              url:'/xiuxianyi'

            },
            {
              img: "desk-4.png",
              name: "凳子",
              url:'/dengzi'
            }
             ]
        },
        {
          url:'/desk',
          name:'茶几',
        secname: [
          {
            img: "all.png",
            name: "全部",
            url:'/all'
          },
          {
            img: "chaji-1.png",
            name: "书桌·餐组",
            url:'/bookdesk'

          },
          {
            img: "chaji-2.png",
            name: "茶几",
            url:'/chaji'

          },
          {
            img: "chaji-3.png",
            name: "边几",
            url:'/bianji'

          },
          {
            img: "chaji-4.png",
            name: "梳妆台",
            url:'/shuzhuangtai'

          }
          ]
        },
        {
          url:'#',
          name:'床·床具',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
        {
          url:'#',
          name:'柜架',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
        {
          url:'#',
          name:'灯具',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
         {
          url:'#',

          name:'家纺',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
       {
          url:'#',

          name:'装饰',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
       {
          url:'#',

          name:'餐具',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        },
       {
          url:'#',

          name:'系列',
          secname: [
          {
            img: "all.png",
            name: "全部"
          },
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
        }
      ]
    };
  },
  methods:{
    tocart(){
      this.$router.push({path:"/cart"})
    }
  },
  computed:{
    cartNum(){
      return this.$store.state.cartNum
    }
  },
  created(){
    
  }
};
</script>

<style>
.item{
  width: 30px;
  height: 50px;
}
#nav {
  padding: 0 5% 0 5%;
  display: flex;
  height: 50px;
  background-color: #313131;
  position: relative;
  /* display: none; */
  flex-wrap: nowrap;
  width: 100%;
}
.logo {
  width: 24px;
  margin-top: 12px;
  cursor: pointer;
}
.logo > img {
  width: 24px;
  height: 24px;
}
.type {
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 550px;
  height: 50px;
  list-style: none;
  line-height: 50px;
  margin-left: 30px;
  z-index: 1000;
}
.type > li > a {
  display: block;
  height: 45px;
  line-height: 50px;
}
.type > li > a {
  color: #fff;
  font-size: 13px;
  text-decoration: none;
}
.ringt-nav {
  width: 400px;
  height: 50px;
  margin-left: 200px;
}
.ringt-nav {
  width: 350px;
  height: 50px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-left: 270px;
}
.ringt-nav > li {
  display: block;
  font-size: 12px;
  color: #fff;
  line-height: 45px;
  height: 45px;
  text-align: center;
  cursor: pointer;
}
.ringt-nav > li>a{
  display: block;
  width: 25px;
  height: 25px;
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
  margin-top: 11px;
  margin-right: 5px;
  left: -22px;
}
.person {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/person.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
  border-bottom: none !important;
}
.shopcar {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/shopcar.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
  border-bottom: none !important;
}
.person:hover {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/person-hover.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
}
.shopcar:hover {
  width: 25px;
  height: 50px;
  background: url("../assets/home-img/shopcar-hover.png") no-repeat;
  background-size: 100% 47%;
  margin-top: 12px;
}
.typetwo {
  display: none;
  position: absolute;
  left: 0;
  top: 43px;
  height: 112px;
  width: 100%;
  background-color: rgba(49, 49, 49, 0.95);
  z-index: 100;
}
.typetwo-con {
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.typetwo-con > a {
  height: 95px;
  width: 55px;
  text-decoration: none;
  margin-right: 40px;
}
.typetwo-con > a > img {
  width: 55px;
}
.typetwo-con > a > p {
  width: 60px;
  color: #d2d2d2;
  font-size: 12px;
  margin-top: -30px;
  text-align: center;
}
.type > li:hover .typetwo {
  display: block;
}
.typetwo-con > a:hover .typetwo-con > a > p {
  color: #fff;
}
.type > li:nth-child(1) > a {
  border-bottom: 1px solid #fff;
}
.ringt-nav > li:hover {
  border-bottom: 1px solid #fff;
}
.type > li > a:hover {
  color: #ccc;
}
.typetwo-con > a > p:hover {
  color: #fff;
}
</style>

