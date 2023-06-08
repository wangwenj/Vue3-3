

import { createRouter, createWebHistory } from 'vue-router'
import register from '../views/RegisterView'
import login from '../views/LoginView'
import main from '../views/MainView'
import detail from '../views/DetailsView'
// 路由配置
const routes = [ 
    {
      path:'/',
      name:'main',
      component:main,
      // 元信息
      meta: {
        req:true,
      }, 
    },
    {
        path:'/login',
        name:'login',
        component:login,
        meta: {
          req:false,
        }, 
    },
    {
      path:'/register',
      name:'register',
      component:register,
      meta: {
        req:false,
      }, 
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail,
      meta: {
        req:false,
      },
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 前置路由
// 如果没有登录  进入其他页面 全部跳到登录页面
router.beforeEach((to,from,next)=>{
  if(to.meta.req){
      if(localStorage.getItem("message")==="ok"){
        next()
      }else{
        next('/login')
      }
  }else{
    next()
  }
})

export default router
