// 引入并使用路由插件
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入路由文件
import  Home from './views/Home.vue' //首页
import Classify from './views/Classify.vue' //分类
import Classifyto from './views/Classifyto.vue' 
import Discover from './views/Discover.vue' //发现
import ShoppingCart from './views/ShoppingCart.vue' //购物车
import User from './views/User.vue' //用户
import Register from './views/Register.vue' //注册
import Login from './views/Login.vue' //登陆
import GoodsDetail from './views/GoodsDetail.vue' //详情页
import Cartlist from './views/Cartlist.vue' //购物车列表
import Balance from './views/Balance.vue'  //结算页面


import Test from './views/Test.vue'  //结算页面






// 实例化，给不同的路由路径匹配对应的路由文件
const router= new Router({
  // mode: 'hash', // 路由模式，默认是hash，就是在浏览器地址后面添加#
  // base:process.env.BASE_URL,
  routes: [
    // {
    //   path:'/',
    //   redirect:'/home' //重定向到首页
    // },
    {
      path: '/',// 路由路径
      name: 'home',// 路由名称
      component: Home// 路由组件
    },
    {
      path: '/classify',// 路由路径
      name: 'classify',// 路由名称
      component: Classify// 路由组件
    },
    {
      path: '/classify/to/:id',// 路由路径
      name: 'classifyto',// 路由名称
      component: Classifyto// 路由组件
    },
    {
      path: '/discover',// 路由路径
      name: 'discover',// 路由名称
      component: Discover// 路由组件
    },
    {
      path: '/shoppingcart',// 路由路径
      name: 'shoppingcart',// 路由名称
      component: ShoppingCart// 路由组件
    },
    {
      path: '/register',// 路由路径
      name: 'register',// 路由名称
      component: Register// 路由组件
    },
    {
      path: '/login',// 路由路径
      name: 'login',// 路由名称
      component: Login// 路由组件
    },
    {
      path: '/user',// 路由路径
      name: 'user',// 路由名称
      component: User// 路由组件
    },
    {
      path: '/goods/detail/:id',// 路由路径
      name: 'goodsdetail',// 路由名称
      component: GoodsDetail// 路由组件
    },
    {
      path: '/cart/list',// 路由路径
      name: 'cartlist',// 路由名称
      component: Cartlist// 路由组件
    },
    {
      path: '/balance',// 路由路径
      name: 'balance',// 路由名称
      component: Balance// 路由组件
    },
    {
      path: '/test',// 路由路径
      name: 'test',// 路由名称
      component: Test// 路由组件
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import( './views/About.vue')//路由懒加载
    // }
  ]
})


//导出路由
export default router
