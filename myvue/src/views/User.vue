<template>
  <div class="User">
    <!-- 用户信息-->
    <div class="userinfo">
      <img class="userimg" src="../assets/img/userinfo.png" alt />
      <div class="userIn">
        <h4>{{!userInfo ? "":userInfo.username}}</h4>
        <section>
          <van-tag round type="danger">LV1</van-tag>
          <span class="lev">
            <b></b>
          </span>
          <div class="lev1">
            <span>100</span>/
            <span>500</span>
          </div>
        </section>
      </div>
    </div>

    <!-- 我的收藏 消息-->
    <div class="collect">
      <a>
        我的收藏（<span>0</span>）
      </a>
      <a class="collect1">
        消息（<span>0</span>）
      </a>
    </div>

    <!--购买订单-->
    <div class="order">
      <a class="tt" href>购买订单</a>
      <ul>
        <li>
          <img src="../assets/img/daifukuan.png" alt />
          <span>待付款</span>
        </li>
        <li>
          <img src="../assets/img/daifahuo.png" alt />
          <span>待发货</span>
        </li>
        <li>
          <img src="../assets/img/daishouhuo.png" alt />
          <span>待收货</span>
        </li>
        <li>
          <img class="hp" src="../assets/img/hpfx.png" alt />
          <span class="dpj">待评价</span>
          <span class="pj">好评返现</span>
        </li>
      </ul>
    </div>

    <!--我的钱包-->
    <div class="wallet">
      <div class="wallet-top">
        <a href>我的钱包</a>
        <span>资金管理></span>
      </div>
      <ul>
        <li>
          <p class="wallect-color">0.00</p>
          <p>余额</p>
        </li>
        <li>
          <p class="wallect-color">0</p>
          <p>优惠卷</p>
        </li>
        <li>
          <p class="wallect-color">0</p>
          <p>花瓣</p>
        </li>
        <li>
          <p class="wallect-color">0</p>
          <p>充值卡</p>
        </li>
      </ul>
    </div>

    <!--账户管理-->
    <div class="account">
      <div class="account-top">
        <a href>账户管理</a>
        <span>></span>
      </div>
      <ul class="account-bottom">
        <li>
          <img src="../assets/img/shouhuodizhi.png" alt />
          <span>收货地址</span>
        </li>
        <li>
          <img src="../assets/img/xinxifankui.png" alt />
          <span>信息反馈</span>
        </li>
        <li>
          <img src="../assets/img/fenxiangzhuanqian.png" alt />
          <span>分享赚钱</span>
        </li>
        <li>
          <img src="../assets/img/shoucang.png" alt />
          <span>我的收藏</span>
        </li>
      </ul>
    </div>
    <!--浏览记录-->
    <div class="browse">
      <a class="tt" href>浏览记录</a>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  data(){
    return{

    }
  },
  methods:{
    ...mapActions(['changeUserInfo2']),

  },
  components:{

  },
  computed:mapState(['token','userInfo']),
  mounted(){
    this.changeUserInfo2().then((res)=>{console.log(res)})
  },
  created(){
    if(!this.token){
      this.$router.push('/register')
    }
  }
  
};
</script>

<style lang="scss" scoped>
.User {
  width: 100vw;
}
.userinfo {
  background-color: #1cbb7f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0;
  .userimg{
    width: 1.15rem;
    height: 1.15rem;
  }
  .userIn {
    display: flex;
    flex-direction: column;
    h4 {
      color: #fff;
      font-size: 0.28rem;
    }
    section {
      position: relative;
      padding: 0.1rem 0;
      .lev {
        display: inline-block;
        width: 30vw;
        background: #fff;
        height: 0.3rem;
        vertical-align: middle;
        border-radius: 0.6rem;
        overflow: hidden;
        position: relative;
        line-height: 1.3rem;
        b {
          display: block;
          width: 20%;
          height: 0.3rem;
          background: #ff7200;
        }
      }
      .lev1 {
        position: absolute;
        top: 0.13rem;
        right: 0.05rem;
        height: 0.3rem;
        text-align: center;
      }
    }
  }
}
.collect {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  height: 0.78rem;
  align-items: center;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  a {
    width: 50vw;
    font-size: 0.32rem;
    height: 0.78rem;
    line-height: 0.78rem;
    span {
      color: #ff4e27;
    }
  }
  .collect1 {
    border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
  }
}
.order,
.account,
.browse{
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  .tt {
    display: flex;
    justify-content: flex-start;
    height: 0.76rem;
    align-items: center;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    color: #1cbb7f !important;
    border-bottom: 0.02rem solid rgba(110, 110, 110, 0.2);
  }
  ul,
  .account-bottom {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;

    li {
      width: 25vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      img {
        width: 0.43rem;
        height: 0.49rem;
        align-self: center;
      }
      .hp {
        width: 1.45rem;
        height: 0.55rem;
      }
      .dpj {
        margin-top: -0.05rem;
      }
      span {
        font-size: 0.26rem;
      }
      .pj {
        position: absolute;
        top: 0.05rem;
        left: 0.42rem;
        color: #fff;
        font-size: 0.26rem;
      }
    }
  }
}
.wallet,
.account {
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  .wallet-top,
  .account-top {
    display: flex;
    justify-content: space-between;
    height: 0.76rem;
    align-items: center;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    border-bottom: 0.02rem solid rgba(110, 110, 110, 0.2);
    a {
      color: #1cbb7f !important;
    }
    span {
      color: #8c8c8c;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0;
    li {
      width: 25vw;
      p {
        color: #55565a;
        font-size: 0.26rem;
      }
      .wallect-color {
        color: #ff4e27;
        font-size: 0.34rem;
      }
      img {
        width: 0.5rem;
        height: 0.46rem;
        align-self: center;
      }
    }
  }
}
</style>