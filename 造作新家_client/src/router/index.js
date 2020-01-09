import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Sofa from '../views/sofa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    

  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{
      keepAlive :true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta:{
      keepAlive :true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/chair',
    name: 'chair',
    component: () => import('../views/chair.vue'),
   children:[
    {
      path:'all',
      name:'all',
      redirect:'/chair',
      component:()=>import( '../views/desk.vue'),
   
     },
     {
      path:'zuoyi',
      name:'zuoyi',
     
      component:()=>import( '../views/desk.vue'),
   
     },
     {
      path:'zuodun',
      name:'zuodun',
     
      component:()=>import( '../views/desk.vue'),
   
     },
     {
      path:'xiuxianyi',
      name:'xiuxianyi',
     
      component:()=>import( '../views/desk.vue'),
   
     },
   ]
  }
  ,
  {
    path: '/desk',
    name: 'desk',
    component: () => import( '../views/desk.vue'),
   children:[
     {
       path:'all',
       name:'all',
       redirect:'/desk',
       component:()=>import( '../views/desk.vue'),
    
      },
     {
      path:'bookdesk',
      name:'bookdesk',
      component:()=>import( '../views/desk.vue'),
     },
     {
      path:'chaji',
      name:'chaji',
      component:()=>import( '../views/desk.vue'),
     },
     {
      path:'bianji',
      name:'bianji',
      component:()=>import( '../views/desk.vue'),
     }
   ]
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "about" */ '../views/item.vue'),
  
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
        component: Sofa,
        
      }
      ,
      {
        path:'triple',
        name:'triplesofa',
        component: Sofa,
        
      }
      ,
      {
        path:'double',
        name:'doublesofa',
        component: Sofa,
        

      }
    ]
  },
  {
    path:'/personal',
    name:'personal',
    component:()=>import ('../views/Personal.vue'),
    meta:{
      requireLogin:true   //个人中心添加需要验证的字段
    }
  },
  {
    path:'*',
    name:'notfound',
    component:()=>import ('../views/notfound'),
    meta:{
      keepAlive :true,
      navshow:true
    }
  }
]

const router = new VueRouter({
  routes,mode:'hash', scrollBehavior (to, from, savedPosition) {//让每次跳转页面跳转到顶部或者保存的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to,from,next)=>{   //在每个路由前添加判断
   if(to.matched.some(recode=>recode.meta.requireLogin)){   //如果该路由需要验证
        if(sessionStorage.getItem('loginInfo')){//如果有登录状态
          next()
        }else{
          next({
            path:'/login'//否则跳转到登录界面
          })
        }
   }else{
     next()//如果不需要验证则直接通过；
   }
})

export default router