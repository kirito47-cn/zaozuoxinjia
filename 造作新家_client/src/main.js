import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios.defaults.baseURL="http://localhost:8888";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

Vue.prototype.axios = axios

let vm =new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// console.log(vm);