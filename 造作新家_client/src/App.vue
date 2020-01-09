<template>
  <div id="app">
    <!-- <router-link to="/login">login</router-link> -->
   <navg v-if="!$route.meta.navshow"></navg>
      <router-view @myevent='changePath'></router-view>
      <!-- <router-link to='/cart'>cart</router-link> -->
   <bot v-if="!$route.meta.keepAlive"></bot>
  </div>
</template>

<script>
import chair from './views/chair.vue';
import desk from './views/desk.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'
import navg from './components/nav'
import sofa from './views/sofa'
import bot from './components/bottom'
import cart from './views/Cart'

export default {
  
  data:function(){
    return{
      path:true
    }
  },
  components:{
    chair,
    desk,
    login,
    register,
    navg,
    sofa,
    bot,
    cart
  },
  methods:{
    changePath(value){
        this.path = value
    } 
  }

}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0
}
</style>
 