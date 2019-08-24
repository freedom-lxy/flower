<template>
  <div class="Classifyto">
    <!--搜索框-->
    <div class="seek">
      <img src="../assets/img/icon_arr_left.png" alt @click="back"/>
      <input type="value" placeholder="商品搜索" />
      <a>
        <img src="../assets/img/zoom.png" alt />
      </a>
      <div>
          <span>荆门</span>
          <van-icon name="arrow-down" />
      </div>
    </div>

    <!--筛选-->
    <div class="condition">
        <span v-for="(item,index) in span" :key="index">{{item}}</span>
    </div>

  <!--种类-->
    <div class="kind">
        <span v-for="(item,index) in kk" :key="index" @click="chooseType(item)">{{item}}</span>
    </div>

    

   <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
      
    </mt-loadmore>


      <!-- <ul class="list">
       <li v-for="(item,index) of list" :key="index" @click="godetail(item._id)">
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
      </ul> -->
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
        list:[],
        span:["销量","新品","价格","筛选"],
        kind:"",
        kk:["观叶绿植","观花绿植","观根绿植","多浆多肉"],
        pageNum:1,
        rank:'',
        order:0,
        allLoaded: false, 
    };
  },
  methods:{
    back() {
      this.$router.back();
    },
    godetail(item){
      this.$router.push(`/goods/detail/${item}`)
      
    },
    reqgoodslist(pageNum){
      return this.$axios.post("/liuxinyi/api/goods/fu",{
        pageNum:this.pageNum,//页数
        key:this.kind,//搜索的内容
        type:this.kk,//种类
        rank:this.rank,//按什么排序
        order:this.order//顺序
      })
    },
    //下拉刷新
    loadTop(){
      this.reqgoodslist(1).
      then((res)=>{
        const {code,msg,list}=res
        if(code==1){
          this.list=list
          this.pageNum=1
          this.$refs.loadmore.onTopLoaded()
          this.allLoaded=false
          
        }else{
          Toast(msg)
        }
      })
    },
    //上拉加载更多
    loadBottom(){
      this.reqgoodslist(this.pageNum+1)
      .then((res)=>{
        const {code,msg,list}=res
        if(code==1){
          if(list.length){
            this.list=this.list.concat(list)
            this.pageNum=this.pageNum+1
          }else{
            this.allLoaded=true
          }
          this.$refs.loadmore.onBottomLoaded()
        }else{
          Toast(msg)
        }
      })
    },
    //点击搜索
    onSearch(){

      this.keyword=this.kind
      this.loadTop('ss')
    },
    //选择分类
    chooseType(type){
      this.type=type
      this.loadTop("s")
    },
    //选择排序
    showRank(rank){
      if(this.rank==rank){
        this.order=-this.order
      }else{
        this.rank=rank
        this.order=1
      }
      this.loadTop('s')
    },
    // reqsearch(){
    //   this.$axios.post('/liuxinyi/api/goods/search',{
    //     key:this.kind
    //   })
    //   .then((res)=>{
    //     const {code,msg,list}=res;
    //     if(code==1){
    //       this.list2=list
    //     }else{
    //       alert(msg);
    //     }
    //   })
    // },
    // reqhot(){
    //   this.$axios.post('/liuxinyi/api/goods/fuzzy',{
    //     type:this.kind
    //   })
    //   .then((res)=>{
    //     const {code,msg,list}=res;
    //     if(code==1){
    //       this.list=list
    //     }else{
    //       alert(msg);
    //     }
    //   })
    // },
    
  },
  mounted(){
    this.loadTop()
    const kind = this.$route.params.id
    this.kind = kind;
    
  },
};
</script>

<style lang="scss" scoped>
.Classifyto {
  width: 100vw;
  padding-bottom: 0.8rem;
}
.seek {
  background-color: #1cbb7b;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  position: relative;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 999;
  input {
    border-radius: 0.5rem;
    padding: 0.02rem 0.2rem;
    border: 0;
    width: 65vw;
    height: 0.5rem;
    font-size: 0.28rem;
  }
  a {
    display: inline-block;
    width: 0.6rem;
    height: 0.56rem;
    position: absolute;
    bottom: 0.18rem;
    right: 1.43rem;
    border-left: 0.02rem solid rgba(110, 110, 110, 0.1);
    img {
      width: 0.5rem;
    }
  }
  div{
      align-self: center;font-size: 0.28rem;
       .van-icon-arrow-down{
           align-self: center;
       }
  }

}
.condition{
    width: 88vw;
    margin: 0.2rem auto;
    background-color: #35d283;
    border-radius: 0.1rem;
    height: 0.65rem;
    display: flex;
    
    span{
        display: flex;
        width: 22vw;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 0.30rem;
        box-sizing: border-box;
        border-right: 0.02rem solid  rgba(255, 255, 255, 0.13);
    }
    .condition-span{
        border-right: 0;
    }
}
.kind{
    width: 88vw;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    span{
        border: 0.01rem solid  #eee;
        padding: 0.1rem 0.2rem;
        border-radius: 0.1rem;
        font-size: 0.24rem;
    }
}

 ul {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    li {
      width: 48vw;
      height: 4.7rem;
      background: #fff;
      margin-bottom: 0.2rem;
      a {
        img {
          width: 44vw;
          height: 44vw;
          border-radius: 0.1rem;
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




</style>
