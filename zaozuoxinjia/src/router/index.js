import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home

  // },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  // },
  {
    path: '/chair',
    name: 'chair',
    component: () => import('../views/chair.vue')
  }
  ,
  {
    path: '/desk',
    name: 'desk',
    component: () => import( '../views/desk.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "about" */ '../views/item.vue')
  }
]

const router = new VueRouter({
  routes,mode:'hash'
})

export default router
