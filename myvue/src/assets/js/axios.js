// 引入aixos
import axios from 'axios'

// 引入loading组件
import {Indicator} from 'mint-ui'

//引入store
import store from '../../store'
//引入store
import router from '../../router'

// 添加请求拦截器
axios.interceptors.request.use(function(config){
	// 添加loading
    Indicator.open('加载中...')
    
    //添加所有请求的公共参数
    config.data=config.data||{}
    config.data.token=store.state.token

	return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function(response){
	// 关闭loading
    Indicator.close()
    
    // //如果token失效，直接跳转到登陆页
    if(response.data.code==-2)router.push('/login')

	// 只返回服务器的响应内容,其实就是res.send里面的数据
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios
