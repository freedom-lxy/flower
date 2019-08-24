<template>
  <div class="cartlist">
    <!--顶部-->
    <div class="t">
      <img src="../assets/img/icon_arr_left.png" @click="back" />
      <h1>购物车</h1>
    </div>
    <ul class="cart-list">
      <li v-for="(item) in list" :key="item._id">
        <img
          class="radioimg"
          :src="require(`../assets/img/${item.isChosen ? 'checked':'radio'}.png`)"
          @click="chooseItem(item)"
          alt
        />
        <img class="cart-img" :src="$commonUrl+item.cartsImg" alt />
        <div class="cart-div">
          <p>{{item.cartsName}}</p>
          <!-- <del>市场价:￥50</del> -->
          <div class="cart-div2">
            <span class="cartprice">￥{{item.cartsPrice}}</span>
            <div class="jisuan">
              <span class="jiesuan-minus" @click="onminus(item)">-</span>
              <span class="jsnum">{{item.buyNum}}</span>
              <span class="jiesuan-add" @click="inadd(item)">+</span>
            </div>
            <img src="../assets/img/del.png" alt  @click="del(item)"/>
          </div>
        </div>
      </li>
    </ul>

    <div class="cart-nav">
      <div class="nav-div" @click="chooseAll">
        <img
          class="radioimg"
          :src="require('../assets/img/'+(isAll ? 'checked':'radio')+'.png')"
          alt
        />
        <span>全选</span>
      </div>
      <van-button type="warning" @click="onDel">删除</van-button>
      <div class="nav-div2">
        <div class="nav-span">
          <span>总计:</span>
          <b>￥{{chosenList|calcTotal}}</b>
        </div>
        <van-goods-action-button type="danger" text="提交订单" @click="gobalance"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: 1,

      list: [],
    };
  },
  computed: mapState(["token"]),
  computed: {
    isAll: {
      get() {
        return this.list.every(e => e.isChosen);
      },
      set(val) {
        this.list.forEach(e => (e.isChosen = val));
      }
    },
    chosenList() {
      return this.list.filter(e => e.isChosen);
    }
  },
  methods: {
    //回退
    back() {
      this.$router.back();
    },
    //跳转结算页面
    gobalance(){
      this.$router.push('/balance');
    },
    //商品展示
    reqcartlist() {
      this.$axios.post("/liuxinyi/api/cart/list").then(data => {
        const { code, msg, list } = data;
        if (code == 1) {
          this.list = list.map(e => Object.assign(e, { isChosen: true }));
        } else {
          Toast(msg);
        }
      });
    },
    //商品数量减少
    onminus(item){
      if(item.buyNum==1){
        Toast('商品数量至少为1')
        return 
      }
      this.$axios.post("/liuxinyi/api/cart/update",{
        id:item._id,
        buyNum:item.buyNum-1
      }).then((res)=>{
        const {code,msg}=res
        if(code==1){
          item.buyNum--
        }else{
          Toast(msg)
        }
      })
    },
    //商品数量增加
    inadd(item){
        this.$axios.post("/liuxinyi/api/cart/update",{
        id:item._id,
        buyNum:item.buyNum+1
      }).then((res)=>{
        const {code,msg}=res
        if(code==1){
          item.buyNum++
        }else{
          Toast(msg)
        }
    })
    },
    //单选删除
    del(item){
      this.$axios.post('/liuxinyi/api/cart/del',{
        id:item._id
      })
      .then((res)=>{
        const {code,msg}=res
        if(code==1){
          Toast(msg)
          this.reqcartlist();
        }else{
          Toast(msg)
        }
      })
    },
    //批量删除
    onDel(){
      const list=this.list

      if(!list.some(e=>e.isChosen)){
        Toast('请至少选择一个商品')
        return
      }
      let id=""

      id=list.filter(e=>e.isChosen).map(e=>e._id).join()
      this.$axios.post('/liuxinyi/api/cart/del',{
        id
      })
      .then((res)=>{
        const {code,msg}=res

        if(code==1){
          Toast(msg)
          for(let i=0;i<list.length;i++){
            if(list[i].isChosen){
              list.splice(i,1)
              i--
            }
          }
        }else{
          Toast(msg)
        }
      })
    },
    //单选
    chooseItem(item) {
      item.isChosen = !item.isChosen;
    },
    //全选
    chooseAll() {
      this.isAll = !this.isAll;
    }
  },
  mounted() {
    this.reqcartlist();
  }
};
</script>

<style lang="scss" scoped>
.cartlist {
  width: 100vw;
  padding-bottom: 0.8rem;
  .t {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    background-color: #1cbb7f;
    color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    align-items: center;
    img {
      width: 0.2rem;
      height: 0.48rem;
    }
    h1 {
      flex: 1;
      font-size: 0.34rem;
      font-weight: 300;
    }
    div {
      span {
        font-size: 0.26rem;
        font-weight: 300;
      }
    }
  }
}
.cart-list {
  width: 100vw;

  li {
    width: 100vw;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);

    .van-checkbox {
      width: 0.4rem;
      padding-right: 0.2rem;
      .van-checkbox__icon {
        align-self: center;
      }
    }
    .cart-img {
      width: 2.5rem;
      object-fit: cover;
      padding-right: 0.2rem;
    }
    .cart-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .cart-div2 {
        width: 3.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .cartprice {
          color: #ff4e27;
          font-size: 0.3rem;
        }
        .jisuan{
          height: 0.32rem;
          width: 21vw;
          border: 0.02rem solid #515151;
          border-radius: 0.05rem;
          display: flex;
          justify-content: space-between;
          .jiesuan-minus{
            width: 5vw;
            border-right: 0.02rem solid #515151;
          }
          .jiesuan-add{
            width: 5vw;
            border-left: 0.02rem solid #515151;
          }
          .jsnum{
            flex: 1;
            align-self: center;
          }
        }

        img {
          width: 0.5rem;
          object-fit: cover;
        }
      }
    }
  }
}
.cart-nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-left: 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-top: 0.02rem solid rgba(110, 110, 110, 0.1);
  .nav-div {
    width: 17vw;
    display: flex;
    align-items: center;
    font-size: 0.28rem;
    .van-checkbox {
      width: 0.4rem;
    }
    
  }
  .nav-div2 {
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-button--large {
      width: 20vw;
      line-height: 0.5rem;
      box-sizing: border-box;
    }
    .nav-span {
      padding-right: 0.3rem;
      span,
      b {
        font-size: 0.34rem;
        font-weight: 500;
        
      }
      b{
        color: #ff4e27;
      }
    }
  }
}
.radioimg {
  width: 0.45rem;
  height: 0.45rem;
  align-self: center;
  padding-right: 0.2rem;
}
.van-button--warning{
  background-color:#ff4444;
  border:0.01rem solid #f44;
  align-self: center;
  margin-left:-10vw;
  height: 0.7rem;
}
</style>