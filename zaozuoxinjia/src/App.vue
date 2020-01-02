<template>
  <div id="app">
    <!-- <router-link to="/login">login</router-link> -->
    <keep-alive><navg></navg></keep-alive>
   <keep-alive> <router-view></router-view></keep-alive>
  </div>
</template>

<script>
import chair from './views/chair.vue';
import desk from './views/desk.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'
import navg from './components/nav'
import sofa from './views/sofa'

export default {
  components:{
    chair:chair,
    desk,
    login,
    register,
    navg,
    sofa
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0
}
</style>
 