<template>
  <div class="goodsdetail">
    <!--顶部-->
    <div class="roof">
      <img src="../assets/img/icon_arr_left.png" alt @click='back'/>
      <h1>商品详情</h1>
      <div>
        <span>荆门</span>
        <van-icon name="arrow-down" />
      </div>
    </div>

    <!--数据-->
    <div class="shuju" v-if="list">
      <div class="top">
        <img class="goodsimg" :src="$commonUrl+list.goodsImg" alt />
        <div class="xq">
          <div class="left">
            <p>{{list.goodsName}}</p>
            <div class="jg">
              <span>售价:</span>
              <b>￥{{list.goodsPrice}}</b>
              <div>
                <span>市场价:</span>
                <del>￥{{list.goodsoldPrice}}</del>
              </div>
            </div>
          </div>
          <div class="right">
            <img src="../assets/img/fenxiang.png" alt />
            <span>分享</span>
          </div>
        </div>
        <p class="jieshao">{{list.goodsDesc}}</p>
        <p class="peisong">配送方式：中通速递</p>
      </div>
    </div>
    <!--库存-->
    <div class="shuliang">
      <div class="num">
        <span>数量</span>
        <van-stepper v-model="value" input-width="0.5rem" button-size="0.4rem" />
      </div>
      <div class="num">
        <span>库存</span>
        <span>0</span>
      </div>
    </div>

    <!--底部-->
    <van-goods-action>
      <van-goods-action-icon class="cion" icon="wap-home" text="首页" @click="gohome" />
      <van-goods-action-icon class="cion" icon="like-o" text="收藏" />
      <van-goods-action-icon :info="length" icon="cart-o" text="购物车" @click="toCartlist()"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart"  />
      <van-goods-action-button type="danger" text="立即购买" @click="addToCart" />
    </van-goods-action>

    <!-- 遮罩 -->
    <transition name="fade">
      <div class="layer" v-show="isAdd" @click="hideAdd"></div>
    </transition>

    <!--向上弹窗-->
    <transition name="side">
      <div class="buyInfo" v-if="isAdd">
        <van-icon name="cross" @click="hideAdd" />
        <img class="smallimg" src="../assets/img/fuguizhu.jpg" alt />
        <div class="div-h4">
          <h4>{{list.goodsName}}</h4>
          <b>￥{{list.goodsPrice}}</b>
        </div>
        <div class="shuliang">
          <div class="num">
            <span>数量</span>
            <van-stepper v-model="value" input-width="0.6rem" button-size="0.5rem" />
          </div>
          <div class="num">
            <span>库存</span>
            <span>0</span>
          </div>
        </div>
        <mt-button type="default" @click="onAdd">确定</mt-button>
      </div>
    </transition>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import {mapState} from "vuex"
export default {
  data() {
    return {
      id: "",
      list: null,
      value: 1,
      info: 0,
      length:0,
      isAdd: false,
    };
  },
  computed:mapState(["token"]),
  methods: {
    back(){
      this.$router.back()
    },
    reqgoodsdetail() {
      this.$axios
        .post("/liuxinyi/api/goods/detail", {
          goodsId: this.id
        })
        .then(res => {
          const { code, msg, list } = res;
          if (code == 1) {
            this.list = list;
          } else {
            Toast(msg);
          }
        });
    },
    reqCartNum(){
      this.$axios.post("/liuxinyi/api/cart/list")
      .then((res)=>{
        const {code,msg,list}=res
        if(code==1){
          this.length=list.length
        }else{
          Toast(msg)
        }
      })
    },
    gohome() {
      this.$router.push("/");
    },
    toCartlist(){
      this.$router.push("/cart/list")
    },
    addToCart() {
      if(!this.token){
        this.$router.push("/login")
      }else{
        this.isAdd = !this.isAdd;
      }
    },
    hideAdd() {
      this.isAdd = false;
    },
    onAdd(){
      this.$axios.post("/liuxinyi/api/cart/add",{
        cartsId:this.id,
        buyNum:this.value
      })
      
      .then((res)=>{
        const {code,msg}=res
        if(code==1){
          Toast(msg)
          this.isAdd=false;
          this.reqCartNum()
        }else{
          Toast(msg)
        }
      })
     
    },
    onDecrease() {
      if (this.buyNum == 1) {
        Toast({
          message: "请至少选择一个商品"
        });
      } else {
        this.buyNum--;
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.id = id;
    this.reqgoodsdetail();
    this.reqCartNum()
  }
};
</script>

<style lang="scss" scoped>
.goodsdetail {
  width: 100vw;
  padding-bottom: 1.2rem;
  .roof {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    background-color: #1cbb7f;
    color: #fff;
    align-items: center;
    img {
      width: 0.2rem;
      height: 0.48rem;
    }
    h1 {
      width: 60vw;
      font-size: 0.34rem;
      font-weight: 300;
      margin-left: 0.65rem;
    }
    div {
      span {
        font-size: 0.26rem;
        font-weight: 300;
      }
    }
  }
}

.top {
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 0.12rem solid rgba(110, 110, 110, 0.1);
  .goodsimg {
    width: 7.34rem;
    width: 7.34rem;
    margin: 0.1rem auto;
  }
  .xq {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .left {
      p {
        text-align: left;
        font-size: 0.3rem;
        font-weight: 500;
      }
      .jg {
        display: flex;
        span {
          font-size: 0.28rem;
        }
        b {
          font-size: 0.28rem;
          color: #ff4e27;
        }
        div {
          margin-left: 0.2rem;
          color: #999;
          align-self: center;

          span {
            font-size: 0.26rem;
          }
        }
      }
    }
    .right {
      border-left: 0.02rem solid #eee;
      display: flex;
      flex-direction: column;
      width: 1rem;
      img {
        width: 0.54rem;
        height: 0.65rem;
        align-self: center;
      }
    }
  }
  .jieshao {
    color: #fa452e;
    text-align: left;
    margin: 0 0.2rem;
    padding: 0.1rem 0;
    border-bottom: 0.02rem solid #eee;
  }
  .peisong {
    text-align: left;
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
  }
}
.shuliang {
  width: 100vw;
  border-bottom: 0.12rem solid rgba(110, 110, 110, 0.1);
  display: flex;
  flex-direction: column;
  .num {
    display: flex;
    padding: 0 0.2rem;
    border-bottom: 0.02rem solid #eee;
    margin: 0.1rem 0;
    padding: 0.1rem;
    span {
      align-self: center;
      margin-right: 0.2rem;
    }
  }
}
.van-goods-action-icon__icon {
  font-size: 0.4rem;
}
.van-button--warning {
  background-color: #ffab35;
  border: 0.01rem solid #ffab35;
}

.van-button--danger {
  background-color: #1cbb7f;
  border: 0.01rem solid #1cbb7f;
}
.van-goods-action-icon {
  border-left: 0.02rem solid #eee;
  box-sizing: border-box;
  width: 1.1rem;
}

.layer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 998;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.slide-enter-to,
.slide-leave {
  transform: translateY(0);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.buyInfo {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  background: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .van-icon-cross {
    position: absolute;
    right: 0.15rem;
    top: 0.1rem;
    font-size: 0.28rem;
  }
  .smallimg {
    width: 1.75rem;
    height: 1.75rem;
    position: absolute;
    border-radius: 0.2rem;
    top: -0.88rem;
    left: 0.2rem;
  }
  .div-h4 {
    width: 50vw;
    margin-left: 22vw;
    text-align: left;
    h4 {
      font-size: 0.3rem;
      font-weight: 500;
    }
    b {
      font-size: 0.28rem;
      color: #ff4e27;
    }
  }
  .shuliang {
    border: 0;
  }
  .mint-button {
    width: 100vw;
    margin-left: -0.4rem;
    background-color: rgb(30, 188, 129);
    color: #fff;
  }
}
</style>