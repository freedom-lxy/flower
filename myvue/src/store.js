import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from './assets/js/axios'


export default new Vuex.Store({
  /*
		单一状态树
		用来存储整个vue项目中的公共状态参数，相当于存放了一堆全局变量
		先要在state中给每个状态参数设置一个初始值
	*/
  state: {
    token:'',
    userInfo:"",
    cartList:[]
  },
  /*
		派生状态参数
		根据state中的参数去变
	*/
  getters:{
    cartTotal:state=>{//reduce是数组方法中计算元素的合，prevTotal表示初始值，currItem表示当前元素的数值
      return state.cartList.reduce((prevTotal,currItem)=>{
        return prevTotal+currItem.price*currItem.num
      },0)
    }
  },


  /*
		状态变更函数
		用来被提交，直接改变state中的某个状态参数
		第一个参数是上面的state，第二个参数是传入的数据
		不能包含异步操作，因为不知道这个异步操作啥时候结束
  */
  
  mutations: {
    changeCartList(state,data){//data是传入的数据，是传入的item

      // 查找购物车列表中是否已有此商品
      const ele = state.cartList.find(e => e.id == data.id);
      if (ele) {
        ele.num++;
      } else {// 如果不存在，就把该商品添加到购物车，并添加一个数量为1
        state.cartList.push({
          ...data,
          num: 1
        });
      }
    },
    changeToken(state,data){
      state.token=data
    },
    changeUserInfo(state,data){
      state.userInfo=data
    }
  },
  actions: {
    changeCartList2({commit},data){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('changeCartList',data)
          resolve()
        },3000)
      })
    },

    changeToken2({commit},data){
      commit('changeToken',data)
    },
    changeUserInfo2({commit,state},data){
      return axios.post('/liuxinyi/api/user/info')
      .then((res)=>{
        const {code,msg,info}=res
        if(code==1){
          commit('changeUserInfo',info)
        }else{
          console.log(msg)
        }
      })
    }
  }
})
