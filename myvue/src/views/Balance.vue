<template>
  <div class="balance">
    <div class="show" v-show="isShow">
    <div class="t">
      <img src="../assets/img/icon_arr_left.png" @click="back" />
      <h1>提交订单</h1>
    </div>
    <!--收货地址-->
    
      <van-notice-bar text="花管家暑期优惠来袭，全场优惠，等你来购买；更多优惠请关注花管家微信公众号，随时随地了解最新优惠" left-icon="volume-o" />
      <div class="site" @click="modification">
        <van-icon name="location-o" size="0.5rem" />
        <div class="site-div">
          <div class="site-div1">
            <p>
              收货人:
              <span>掏鼠标</span>
            </p>
            <p>17683888090</p>
          </div>
          <p class="site-p">
            收货地址：
            <span>湖北省荆门市></span>
          </p>
          <p class="site-p1">(收货不方便时，可选择免费暂存服务)</p>
        </div>
      </div>
      <div class="card" v-for="(item,index) in cartList" :key="index">
        <img
          class="radioimg"
          :src="require(`../assets/img/${item.isChosen ? 'checked':'radio'}.png`)"
          @click="chooseItem(item)"
          alt
        />
        <img :src="$commonUrl+item.cartsImg" alt />
        <div class="card-right">
          <p>{{item.cartsName}}</p>
          <van-tag plain type="danger">当天退换</van-tag>
          <div class="card-div">
            <span class="card-spancolor">￥{{item.cartsPrice}}</span>
            <span>x{{item.buyNum}}</span>
          </div>
        </div>
      </div>
      <!--填写信息-->
      <div class="message">
        <div class="message-div mess">
          <p>配送方式</p>
          <span>快递 免邮 ></span>
        </div>
        <div class="message-div">
          <p>运费险</p>
          <span>卖家送，确认收货前退货可赔 ></span>
        </div>
      </div>
      <van-cell-group>
        <van-field label="买家留言" type="textarea" placeholder="选填，请先和商家协商一直" rows="1" autosize />
      </van-cell-group>
      <div class="cart-nav">
        <div class="nav-div2">
          <div class="nav-span">
            <span>总计:</span>
            <b>￥{{chosenList|calcTotal}}</b>
          </div>
          <van-goods-action-button type="danger" text="去支付" />
        </div>
      </div>
    </div>
    <div v-show="show">
      <div class="t">
      <img src="../assets/img/icon_arr_left.png" @click="tuichu" />
      <h1>编辑地址</h1>
    </div>
    <van-address-edit
      :area-list="areaList"
      
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      
    />
    </div>
    
  </div>
</template>

<script>
import areaList from "../assets/js/areaList";
export default {
  data() {
    return {
      areaList: areaList,

      searchResult: [],
      show: false,
      isShow: true,
      cartList: [],
    };
  },
  computed: {
    chosenList() {
      return this.cartList.filter(e => e.isChosen);
    },
    
  },
  methods: {
    reqcartList() {
      this.$axios.post("/liuxinyi/api/cart/list").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.cartList = list.map(e => Object.assign(e, { isChosen: true }));
        } else {
          Toast(msg);
        }
      });
    },
    chooseItem(item) {
      item.isChosen = !item.isChosen;
    },
    back() {
      this.$router.back();
    },
    modification() {
      this.isShow = false;
      this.show = true;
    },
    onSave() {
      this.isShow = true;
      this.show = false;
    },
    tuichu(){
      this.isShow = true;
      this.show = false;
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "金融港",
            address: "武汉市江夏区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {
    this.reqcartList();
  }
};
</script>

<style lang="scss" scoped>
.balance {
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
  }
}
.site {
  width: 100vw;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 0.12rem solid rgba(110, 110, 110, 0.2);
  .van-icon-location-o {
    align-self: center;
  }
  .site-div {
    padding: 0 0.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .site-div1 {
      display: flex;
      justify-content: space-between;
      font-size: 0.28rem;
      // color: black;
      font-weight: 600;
    }
    .site-p,
    .site-p1 {
      display: flex;
      align-content: flex-start;
      font-size: 0.28rem;
    }
    .site-p1 {
      color: #f44;
      font-size: 0.24rem;
      font-weight: 600;
    }
  }
}
.card {
  width: 100vw;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 0.02rem solid rgba(110, 110, 110, 0.2);
  img {
    width: 2rem;
    height: 2rem;
  }
  .radioimg {
    width: 0.5rem;
    height: 0.5rem;
    align-self: center;
  }
  .card-right {
    width: 64vw;
    padding: 0 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .card-div {
      display: flex;
      width: 58vw;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      .card-spancolor {
        color: #f44;
        font-size: 0.28rem;
      }
    }
  }
}
.van-cell {
  padding: 0.15rem 0.2rem;
}
.message {
  width: 100vw;
  // padding: 0.15rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .message-div {
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.5rem;
  }
  .mess {
    border-bottom: 0.01rem solid #ebedf0;
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
  justify-content: flex-end;
  background-color: #fff;
  border-top: 0.02rem solid rgba(110, 110, 110, 0.1);
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
      b {
        color: #ff4e27;
      }
    }
  }
}
</style>