<template>
  <div class="home" >
    <div v-show="isshow" ref="home">
       <!--轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) of swiper" :key="index">
        <img :src="$commonUrl+item.img" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 搜索框 -->
    <div class="search">
      <img class="logo" src="../assets/img/logo.png" alt />
      <van-search placeholder="搜索商品" @click="gosearch"/>
      <div class="site">荆门</div>
    </div>

    <div class="kinds" @click="goclassify">
      <ul class="kind">
        <li>
          <img src="../assets/img/ic/ic1.png" alt />
          <span>绿植花卉</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic2.png" alt />
          <span>鲜花花篮</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic3.png" alt />
          <span>小桌摆</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic4.png" alt />
          <span>团购</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic5.png" alt />
          <span>秒杀</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic6.png" alt />
          <span>开业送礼</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic7.png" alt />
          <span>绿植租摆</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic8.png" alt />
          <span>资材配套</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic9.png" alt />
          <span>领卷中心</span>
        </li>
        <li>
          <img src="../assets/img/ic/ic10.png" alt />
          <span>全部分类</span>
        </li>
      </ul>
    </div>

    <!-- 提示-->
    <div class="hiht">
      <img src="../assets/img/trumpet.png" alt />
      <span>养护</span>
      <p>对抗干燥，这几盆植物完胜加湿器</p>
    </div>

    <!-- 全国包邮-->
    <div class="xmsks" @click="goclassify">
      <img src="../assets/img/xmsks.png" alt />
      <ol>
        <li>
          <img src="../assets/img/zuobai.png" style="background-color:#f2f0e3" alt />
        </li>
        <li>
          <img src="../assets/img/duorou.png" style="background-color:#f3e2e8" alt />
        </li>
        <li>
          <img src="../assets/img/xianhua.png" style="background-color:#dff3e8" alt />
        </li>
        <li>
          <img src="../assets/img/zicai.png" style="background-color:#e2f0f1" alt />
        </li>
      </ol>
    </div>
    <!--开业送礼 -->
    
    <div class="openningup" @click="goclassify">
      <a >
        <img class="up" src="../assets/img/openningup.png" alt />
      </a>
      <ul>
        <li>
          <a >
            <img src="../assets/img/kaiyehualan.jpg" alt />
          </a>
        </li>
        <li class="xpsj">
          <a >
            <img src="../assets/img/kaiyelvzhi.jpg" alt />
          </a>
          <span>新品上架</span>
        </li>
      </ul>
    </div>

    <!-- 小桌摆-->
    <div class="plants" @click="goclassify">
      <a >
        <img class="up" src="../assets/img/plants.png" alt />
      </a>
      <ul>
        <li class="plants-l">
          <a >
            <img src="../assets/img/plants01.jpg" alt />
          </a>
        </li>
        <li class="plants-r">
          <div>
            <a >
              <img src="../assets/img/plants02.jpg" alt />
            </a>
            <span>新品上架</span>
          </div>
          <div class="plants-r-b">
            <a >
              <img src="../assets/img/plants03.jpg" alt />
            </a>
          </div>
        </li>
      </ul>
    </div>

    <!-- 鲜花花篮-->
    <div class="flowers" @click="goclassify">
      <a >
        <img class="up" src="../assets/img/flower.png" alt />
      </a>
      <ul>
        <li class="ul-flowers">
          <a >
            <img src="../assets/img/flower01.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/flower02.jpg" alt />
          </a>
        </li>
        <li class="ul-flowers">
          <a >
            <img src="../assets/img/flower03.jpg" alt />
          </a>
          <span>期待惊喜</span>
        </li>
        <li>
          <a >
            <img src="../assets/img/flower04.jpg" alt />
          </a>
        </li>
      </ul>
      <ol>
        <li class="ol-flowers">
          <a >
            <img src="../assets/img/flower05.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/flower06.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/flower07.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/flower08.jpg" alt />
          </a>
        </li>
      </ol>
    </div>

    <!--多肉专区-->
    <div class="succulents" @click="goclassify">
      <a >
        <img class="up" src="../assets/img/fleshiness.png" alt />
      </a>
      <ul>
        <li class="ul-succulents">
          <a >
            <img src="../assets/img/succulent01.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/succulent02.jpg" alt />
          </a>
        </li>
        <li class="ul-succulents">
          <a >
            <img src="../assets/img/succulent03.jpg" alt />
          </a>
        </li>
        <li>
          <a >
            <img src="../assets/img/succulent04.jpg" alt />
          </a>
          <span>新手必备</span>
        </li>
      </ul>
    </div>

    <!-- 资材配套-->
    <div class="tools" @click="goclassify">
      <a >
        <img class="up" src="../assets/img/tools.png" alt />
      </a>
      <ul>
        <li>
          <a >
            <img src="../assets/img/tools1.jpg" alt />
          </a>
        </li>
        <li class="xpsj">
          <a >
            <img src="../assets/img/tools2.jpg" alt />
          </a>
          <span class="tools-span">新品上架</span>
        </li>
      </ul>
    </div>


    <!-- 热门推荐-->
    <div class="hot">
       <a >
        <img class="up" src="../assets/img/hot.png" alt />
      </a>
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
   <!--展示搜索-->
   <div class="t" v-show="isshow2">
      <div class="div-top">
        <h3>搜索</h3>
        <van-icon name="cross" @click="gosearch"/>
      </div>
      <div class="div-search" >
          <input  class="div-input" v-model="value" type="text" placeholder="请输入搜索关键字">
          <div class="div-sh" >
              <van-icon name="search" @click="go(value)"/>
          </div>
      </div>
      <ul class="kk">
          <li v-for="(item,index) in kinds" :key="index" @click="show1(index)" :class="{ red:changeRed == index}" >{{item}}</li>
      </ul>
   </div>
    <!-- 回到顶部 -->
    <BackToTop />

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import BackToTop from "@/components/BackToTop.vue";
export default {
  name: "home",
  data() {
    return {
      swiper:[],
      hott:[],
      show:false,
      isshow:true,
      isshow2:false,
      i:"",
      value:"",
      kinds:["富贵竹","发财树","多肉","红掌","吉娃娃","一生所爱","情有独钟","幸福告白","匆匆那年","观叶植物","观花植物",'高级花盒',"精品花束"],
      changeRed:-1
    };
  },
  // 在当前组件中添加其他的自定义组件
 components: {
  BackToTop
  },

  methods: {
    show1(index){
      this.value=this.kinds[index];
      this.changeRed = index
    },
    go(value){
      this.$router.push(`/classify/to/${value}`)
    },
    gosearch(){
      this.isshow=!this.isshow;
      this.isshow2=!this.isshow2;
    },  
   goclassify(){
     this.$router.push("classify")
   },
   godetail(item){
      this.$router.push(`/goods/detail/${item}`)
     
    },
    reqSwiper(){
      this.$axios.post('/liuxinyi/api/goods/swiper')
      .then(res=>{
        const {code,msg,list}=res;
        if(code==1){
          this.swiper=list
        }else{
          Toast(msg)
        }
      })
    },
    reqhot(){
      this.$axios.post('/liuxinyi/api/goods/hot')
      .then((res)=>{
        const {code,msg,list}=res;
        if(code==1){
          this.hott=list
        }else{
          Toast(msg)
        }
      })
    }
  },
  // 生命周期函数,当前组件上的所有DOM节点都已经创建出来
  mounted(){
    this.reqSwiper();
    this.reqhot();
  },

  //生命周期函数，进入缓存组件
  activated() {
    window.scrollTo(0, this.cache_scrollTop);
  },

  // 生命周期函数,离开缓存组件
  deactivated() {
    
  },
  beforeRouteLeave(to, from, next) {
   
    // 1.获取页面的scrollTop,赋给一个新的变量
    this.cache_scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
      next();
  }
};
</script>

<style lang="scss" scope >
.home {
  width: 100vw;
  padding-bottom: 0.8rem;
}
.van-swipe {
  margin-top:0.8rem;
  img {
    width: 100vw;
    height: 3.4rem;
  }
}
.search {
  width: 100vw;
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.1rem 0;
  background-color: #1cbb7b;
  z-index: 999;
  .logo {
    width: 1.5rem;
    height: 0.45rem;
  }
  .van-search {
    padding: 0.04rem 0.16rem;
    border-radius: 0.4rem;
    width: 50vw;

    .van-search__content {
      background-color: #fff;
      height: 0.5rem;
      .van-cell {
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 0.05rem 0.1rem 0.05rem 0;
        .van-icon{
          font-size: 0.32rem;
         
        }
         .van-field__control{
          font-size: 0.24rem;
        }
        
      }
    }
  }
  .site {
    width: 1.3rem;
    height: 0.52rem;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 0.52rem;
    border-radius: 0.3rem;
  }
}
.kinds {
  width: 100vw;
  padding: 0 0 0.2rem 0;
  .kind {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 20vw;
      height: 11.1vh;
      padding: 0.4rem 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 0.86rem;
        height: 0.86rem;
        align-self: center;
      }
    }
  }
}
.hiht {
  width: 100vw;
  height: 0.76rem;
  display: flex;
  align-items: center;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);

  img {
    width: 0.5rem;
    object-fit: cover;
    padding: 0 0.2rem;
  }
  span {
    border: 0.01rem solid #fe6c5e;
    color: #fe6c5e;
    padding: 0.03rem;
    border-radius: 0.1rem;
    text-align: center;
    font-size: 0.1rem;
  }
  p {
    margin-left: 0.2rem;
  }
}
.xmsks {
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  img {
    width: 3rem;
    height: 0.85rem;
    margin: 0 auto;
    padding: 0.17rem 0;
  }
  ol {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 0.17rem 0.17rem 0.17rem;

    li {
      img {
        width: 1.67rem;
        height: 2.28rem;
      }
    }
  }
}
.openningup,
.tools {
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  a {
    width: 100vw;
    .up {
      width: 100vw;
      height: 0.89rem;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    border-top: 0.03rem solid rgba(110, 110, 110, 0.2);
    box-sizing: border-box;
    li {
      width: 50vw;
      position: relative;

      img {
        width: 50vw;
        height: 2rem;
      }
      span {
        position: absolute;
        bottom: 0.8rem;
        left: 0.26rem;
        color: #fff;
        background: linear-gradient(to right, #f05b19, #f08319);
        font-size: 0.25rem;
        padding: 0.03rem;
      }
      .tools-span {
        background: linear-gradient(to right, #53adfb, #536ffb);
        left: 0.24rem;
      }
    }
    .xpsj {
      border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
      box-sizing: border-box;
    }
  }
}
.plants {
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  a {
    width: 100vw;
    .up {
      width: 100vw;
      height: 0.89rem;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    border-top: 0.02rem solid rgba(110, 110, 110, 0.2);
    box-sizing: border-box;
    display: flex;
    .plants-l {
      width: 50vw;
      a {
        width: 50vw;
        img {
          width: 50vw;
          height: 4.4rem;
        }
      }
    }
    .plants-r {
      width: 50vw;
      display: flex;
      flex-direction: column;
      border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
      box-sizing: border-box;
      div {
        width: 50vw;
        position: relative;
        img {
          width: 50vw;
          height: 2.2rem;
        }
        span {
          position: absolute;
          top: 0.85rem;
          left: 0.24rem;
          font-size: 0.25rem;
          color: #fff;
          background: linear-gradient(to right, #3db716, #6db716);
          padding: 0.03rem;
        }
      }
      .plants-r-b {
        border-top: 0.02rem solid rgba(110, 110, 110, 0.2);
        box-sizing: border-box;
      }
    }
  }
}
.flowers {
  display: flex;
  width: 100vw;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  a {
    .up {
      width: 100vw;
      height: 0.89rem;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50vw;
      box-sizing: border-box;
      border-top: 0.02rem solid rgba(110, 110, 110, 0.2);
      border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
      img {
        width: 50vw;
        height: 2.2rem;
      }
    }
    .ul-flowers {
      border-left: 0;
      position: relative;
      span {
        position: absolute;
        left: 0.23rem;
        top: 0.85rem;
        font-size: 0.25rem;
        color: #fff;
        padding: 0.03rem;
        background: linear-gradient(to right, #ff5050, #ff5816);
      }
    }
  }
  ol {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-top: 0.02rem solid rgba(110, 110, 110, 0.2);
    li {
      width: 25vw;
      box-sizing: border-box;
      border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
      img {
        width: 25vw;
        height: 2.2rem;
      }
    }
    .ol-flowers {
      border-left: 0;
    }
  }
}

.succulents {
  display: flex;
  width: 100vw;
  flex-direction: column;
  border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
  a {
    .up {
      width: 100vw;
      height: 0.89rem;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50vw;
      box-sizing: border-box;
      border-top: 0.02rem solid rgba(110, 110, 110, 0.2);
      border-left: 0.02rem solid rgba(110, 110, 110, 0.2);
      position: relative;
      span {
        position: absolute;
        left: 0.19rem;
        top: 0.85rem;
        font-size: 0.25rem;
        color: #fff;
        padding: 0.03rem;
        background: linear-gradient(to right, #45d79b, #51da78);
      }
      img {
        width: 50vw;
        height: 2.2rem;
      }
    }
    .ul-succulents {
      border-left: 0;
    }
  }
}
.hot {
  display: flex;
  width: 100vw;
  flex-direction: column;
  border-bottom: 0.3rem solid rgba(110, 110, 110, 0.1);
  a {
    .up {
      width: 100vw;
      height: 0.89rem;
    }
  }
  ul {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #f3f3f3;
    li {
      width: 49vw;
      height: 5.15rem;
      background: #fff;
      margin-bottom: 0.2rem;
      a {
        img {
          width: 49vw;
          height: 49vw;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.1rem 0;
          p {
            font-size: 0.26rem;
            height: 0.42rem;
            .size {
              color: #ff4e27;
              padding-right: 0.2rem;
            }
          }
        }
      }
    }
  }
}
.t{
  width: 100vw;
 
  .div-top{
    width: 100vw;
    display: flex;
    background-color: #1cbb7b;
    justify-content: center;
    padding: 0.17rem 0;
    h3{
      width: 90vw;
      color: #fff;
    }
    .van-icon-cross{
      align-self: center;
      font-size: 0.35rem;   
      color: #fff;   
    }
  }
  .div-search{
    width: 100vw;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;

    input{
      width: 90vw;
      padding: 0.1rem;
      font-size: 0.28rem;
      border-radius: 0.1rem 0 0 0.1rem;
      border: 0;
      border: 0.02rem solid #f0f0f0;
      
    }
    .div-sh{
      background-color: #1CBB7F;
      width: 0.7rem;
      height: 0.58rem;
      margin-left: -0.1rem;
      border-radius:  0 0.1rem 0.1rem 0;
      .van-icon-search{
        color: #fff;
        align-self: center;
        font-size: 0.6rem;
      }
    }
  }
}
.kk{
  width: 100vw;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li{
    padding: 0.15rem;
    border:0.02rem solid #f0f0f0;
    margin: 0.15rem;
    border-radius: 0.3rem;
    font-size: 0.26rem;
    color: #666;
  }
  .red{
    background-color: #1CBB7F;
    color: #fff;
  }
}

</style>

