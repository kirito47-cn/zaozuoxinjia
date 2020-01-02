import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

axios.defaults.baseURL="http://localhost:8888";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    var nav = document.querySelector("#nav");
    document.onscroll = function() {
      if (window.pageYOffset >= 150) {
        nav.style.display = "block";
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.zIndex = "1000000";
        nav.style.display="flex";
      } else {
        nav.style.display = "none";
      }
    };
  }, 
}).$mount('#app')