<template>
  <div id="app">
     <!-- <home></home>s -->
      <!-- <nav-head></nav-head> -->
  <router-view/>

  </div>
</template>

<script>
import Home from "./views/Home";
import Nav from "./components/nav";
export default {
      components:{
        "home":Home,
        "nav-head":Nav
    }
}
</script>

<style lang="scss">  
*{
  margin: 0;
  padding: 0;
} 
a{
  text-decoration: none;
}
.body{
    background: #f6f6f6;
    color: #313131;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
 