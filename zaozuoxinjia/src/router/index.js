import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Home from "../views/Home.vue"
Vue.use(VueRouter)

const routes = [
   {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router