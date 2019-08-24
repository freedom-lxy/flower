// 使用ES6的模块化语法引入各种模块或者文件
import Vue from 'vue'// 引入vue的类库文件
import App from './App.vue'// 引入根组件
import router from './router'// 引入路由
import store from './store'// 引入vuex

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)


Vue.config.productionTip = false

// 根据不同的环境,配置不同的请求域
const commonUrl = process.env.NODE_ENV == 'development' ? 'http://192.168.50.39:9999' : 'http://47.95.14.30:9999'
// 把请求域添加Vue,然后每个组件都可以直接获取它
Vue.prototype.$commonUrl = commonUrl

//引入配置好的axios
import axios from './assets/js/axios'

// 把axios添加到Vue上,然后每个组件中都可以引用这里的axios
Vue.prototype.$axios = axios

//定义全局过滤器
Vue.filter('calcTotal',(list)=>{
  return list.reduce((oldTotal,currEle)=>{
    return oldTotal+(currEle.cartsPrice*currEle.buyNum)
  },0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
