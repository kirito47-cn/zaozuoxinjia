import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sofa from '../views/sofa.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
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
  },
  {
    path: '/sofa',
    name: 'sofa',
    // redirect:'/sofa/all',
    component:Sofa,
    children:[
      {
        path:'all',
        name:'all',
        component: Sofa,
        redirect:'/sofa'
      }
      ,
      {
        path:'single',
        name:'singlesofa',
        component: () => import(/* webpackChunkName: "about" */ '../components/singlesofa.vue')
      }
      ,
      {
        path:'triple',
        name:'triplesofa',
        component: () => import(/* webpackChunkName: "about" */ '../components/triplesofa.vue')
      }
      ,
      {
        path:'double',
        name:'doublesofa',
        component: () => import(/* webpackChunkName: "about" */ '../components/doublesofa.vue')

      }
    ]
  }
]

const router = new VueRouter({
  routes,mode:'hash'
})

export default router