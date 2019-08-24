<template>
  <div id="app">
    <keep-alive include="home">
      <!-- router-view也是一个内置组件，用来显示不同路由对应的内容 -->
      <router-view></router-view>
    </keep-alive>

    <img class="kefu" src="./assets/img/kefu.png" alt />

    <!--导航栏 -->
    <div id="nav" v-show="isnav">
      <router-link to="/" class="active active1">
        <img src="./assets/img/home.png" alt="">
        <span>首页</span>
      </router-link> 
      <router-link to="/classify" class="active">
        <img src="./assets/img/classify.png"  alt="">
        <span>分类</span>
      </router-link>
      <router-link to="/discover" class="active">
        <img src="./assets/img/discover.png" alt="">
        <span>发现</span>
      </router-link>
      <router-link to="/shoppingcart" class="active">
        <img src="./assets/img/shoppingcart.png" alt="">
        <span>购物车</span>
      </router-link>
      <router-link to="/user" class="active">
        <img src="./assets/img/user.png" alt="">
        <span>用户</span>
      </router-link>
    </div>
    
  </div>
</template>
<script>

	import {mapMutations} from 'vuex'

	export default {
		name: 'app',
		data(){
			return {
				isnav:true
			}
    },
    methods:mapMutations(["changeToken"]),
    watch:{
      $route(to,from){
        const name=to.name
        this.isnav=/home|classify|discover|shoppingcart|user/.test(name)
      }
    },

    created(){
      const token=localStorage.getItem('token')
      this.changeToken(token)
    },

    mounted(){
      this.isnav=/home|classify|discover|shoppingcart|user/.test(this.$route.name)
    }
		
	}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
a {
  color: inherit !important;
  text-decoration: none !important;
}
img {
  vertical-align: top !important;
  border: 0 !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
.kefu {
  position: fixed;
  bottom: 1rem;
  right:0rem;
  width: 0.54rem;
  height: 0.54rem;
}
#nav {
  width: 100vw;
  height: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  background: #fff;
  z-index: 99;
  a {
    display: flex;
    flex-direction: column;
    width: 20%;
    img{
      width: 0.41rem;
      height: 0.41rem;
      // object-fit: cover;
      align-self: center;
    }
    span{
      color:#55565a;
      font-size: 0.24rem;
    }
  }

}


</style>
