<template>
  <div class="ShoppingCart">
    <!--顶部-->
    <div class="t">
      <img src="../assets/img/icon_arr_left.png" alt="" @click='back'>
      <h1>购物车</h1>
      <div>
        <span>荆门</span>
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 购物车-->
    <div class="cart">
        <van-icon name="shopping-cart-o" />
        <h3>购物车是空的</h3>
    </div>

    <!--热卖-->
    <div class="hot1">
        <span>
            <img src="../assets/img/top.png" alt="">
        看看热卖</span>
    </div>

    <ol>
      <li v-for="(item,index) of list" :key="index" v-mode="length">

      </li>
    </ol>
    <!-- 热门推荐-->
    <div class="hot">
      
      <ul>
       <li v-for="(item,index) of hott" :key="index" @click="godetail(item._id)">
          <a >
            <img :src="$commonUrl+item.goodsImg" alt />
            <div>
              <p>{{item.goodsName}}</p>
              <p>(已售3127)</p>
              <p>
                <span class="size">￥{{item.goodsPrice}}</span>
                <del>￥{{item.goodsoldPrice}}</del>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      hott:[],
      list:[],
      length:"",
    }
  },
  methods:{
    reqlist(){
      this.$axios.post("/liuxinyi/api/cart/list")
      .then((res)=>{
        const {code,msg,list}=res
        if(code==1){
          
          this.list=list
          this.length=list.length
          if(!this.length==0){
            this.$router.push("/cart/list")
          }
        }else{
          Toast(msg)
        }
      })
    },
    godetail(item){
      this.$router.push(`/goods/detail/${item}`)
      
    },
     back(){
      this.$router.back()
    },
    reqhot(){
      this.$axios.post('/liuxinyi/api/goods/hot')
      .then((res)=>{
        const {code,msg,list}=res;
        if(code==1){
          this.hott=list
        }else{
          alert(msg);
        }
      })
    }
  },
  mounted(){
    this.reqlist();
    this.reqhot();
  },
};
</script>

<style lang="scss" scoped>
.ShoppingCart {
  width: 100vw;
  padding-bottom: 0.6rem;
  .t {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    background-color: #1cbb7f;
    color:#fff;
    align-items: center;
    img{
        width: 0.2rem;
        height: 0.48rem;
        
    }
    h1{
        width: 60vw;
        font-size: 0.34rem;
        font-weight: 300;
        margin-left: 0.65rem;
    }
    div{
        span{
            font-size: 0.26rem;
            font-weight: 300;
        }
    }
  }
}
.cart{
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 0.2rem 0;
    .van-icon{
        font-size: 0.4rem;
        color: #999;
    }
    h3{
        color: #999;
        font-weight: 300;
    }
}
.hot1{
    background: #F3F5F7 url(../assets/img/hr.jpg) center left repeat-x;
    text-align: center;
    padding: 0.2rem 0;
    span{
        background: #F3F5F7;
        color: #777;
        padding: 0 0.1rem;
        font-size: 0.26rem;
    }
}

</style>