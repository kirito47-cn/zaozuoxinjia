<template>
  <div id="app">
    <router-link to="/login">login</router-link>
    <navg></navg>
    <router-view></router-view>
  </div>
</template>

<script>
import chair from './views/chair.vue';
import desk from './views/desk.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'
import navg from './components/nav'

export default {
  components:{
    chair:chair,
    desk,
    login,
    register,
    navg
  }
}
</script>
<style lang="scss">

</style>
 