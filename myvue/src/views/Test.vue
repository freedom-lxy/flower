<template>
  <div>
    <div>
      <h3>商品列表:</h3>
      <div class="cell" v-for="(item,index) of goodsList" :key="index">
        <span>{{item.name}}</span>
        <span>价格:￥{{item.price}}</span>
        <button @click="addcart(item)">添加到购物车</button>
      </div>
    </div>
    <hr />
    <div>
      <h3>购物车列表:</h3>
      <div class="cell" v-for="(item,index) of cartList" :key="index">
        <span>{{item.name}}</span>
        <span>价格:￥{{item.price}}</span>
        <span>数量：{{item.num}}</span>
      </div>
    </div>
    <hr />
    <div>结算价格:{{cartTotal}}</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      goodsList: [
        { id: 1, name: "小笼包", price: 5 },
        { id: 2, name: "糠饼子", price: 2 },
        { id: 3, name: "酱香饼", price: 3 },
        { id: 4, name: "牛肉饼", price: 9 },
        { id: 5, name: "老婆饼", price: 8 }
      ],
      
    };
  },
  computed: {
      ...mapState(['cartList']),
      ...mapGetters(['cartTotal'])
       
  },
  methods: {

    ...mapMutations(['changeCartList']),
    ...mapActions(['changeCartList2']),

    addcart(item) {
      // 1.使用同步的方式，改变购物车列表
      // this.changeCartList(item)]

      // 2.使用异步的方式，改变购物车列表
      this.changeCartList2(item).then(()=>{
        console.log('添加成功')
      })
     
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin: 0.1rem 0.2rem;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.1rem 0;
}
</style>