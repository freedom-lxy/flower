<template>
  <div class="Classify">
    <!--搜索框-->
    <div class="seek">
      <input type="value" v-model="value" placeholder="商品搜索"  />
      <a>
        <img src="../assets/img/zoom.png" alt @click="go(value)"/>
      </a>
    </div>

    <!--侧边导航-->
    <div class="classbody">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item,index) in list1"
          :key="index"
          @click="to(index)"
          :title="item"
        />
      </van-sidebar>
      <div class="classlist" v-show="show1">
        <div class="classlist1">
          <ul>
            <li>
              <div class="classlist-t">
                <span>{{type[0]}}</span>
                <a @click="gokind(type[0])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of guanye"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
            <li>
              <div class="classlist-t">
                <span>{{type[1]}}</span>
                <a @click="gokind(type[1])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of guanhua"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
            <li>
              <div class="classlist-t">
                <span>{{type[2]}}</span>
                <a @click="gokind(type[2])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of guangen"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
            <li>
              <div class="classlist-t">
                <span>{{type[3]}}</span>
                <a @click="gokind(type[3])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of duorou"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="classlist" v-show="show2">
        <div class="classlist1">
          <ul>
            <li>
              <div class="classlist-t">
                <span>{{type[4]}}</span>
                <a @click="gokind(type[4])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of huasu"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
            <li>
              <div class="classlist-t">
                <span>{{type[5]}}</span>
                <a @click="gokind(type[5])">查看全部></a>
              </div>
              <ul class="classlist-b">
                <li
                  class="classlist-i"
                  v-for="(item,index) of hualan"
                  :key="item._id"
                  @click="godetail(item._id)"
                >
                  <img :src="$commonUrl+item.goodsImg" alt />
                  <p>{{item.goodsName}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      list1: ["小桌摆", "鲜花花篮"],
      type: [
        "观叶绿植",
        "观花绿植",
        "观根绿植",
        "多浆多肉",
        "精品花束",
        "高级花盒"
      ],
      guanye: [],
      guanhua: [],
      guangen: [],
      duorou: [],
      hualan: [],
      huasu: [],
      show1: true,
      show2: false,
      value:""
    };
  },
  methods: {
    go(value){
      this.$router.push(`/classify/to/${value}`)
    },
    godetail(item) {
      this.$router.push(`/goods/detail/${item}`);
    },
    gokind(id) {
      this.$router.push(`/classify/to/${id}`);
    },
    to(index) {
      if (index == 0) {
        (this.show1 = true), (this.show2 = false);
      } else {
        (this.show2 = true), (this.show1 = false);
      }
    },
    reqguanye() {
      this.$axios.post("/liuxinyi/api/goods/list").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.guanye = list;
        } else {
          alert(msg);
        }
      });
    },
    reqguanhua() {
      this.$axios.post("/liuxinyi/api/goods/list1").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.guanhua = list;
        } else {
          alert(msg);
        }
      });
    },
    reqguangen() {
      this.$axios.post("/liuxinyi/api/goods/list2").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.guangen = list;
        } else {
          alert(msg);
        }
      });
    },
    reqduorou() {
      this.$axios.post("/liuxinyi/api/goods/list3").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.duorou = list;
          
        } else {
          alert(msg);
        }
      });
    },
    reqhualan() {
      this.$axios.post("/liuxinyi/api/goods/list4").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.hualan = list;
        } else {
          alert(msg);
        }
      });
    },
    reqhuasu() {
      this.$axios.post("/liuxinyi/api/goods/list5").then(res => {
        const { code, msg, list } = res;
        if (code == 1) {
          this.huasu = list;
        } else {
          alert(msg);
        }
      });
    }
  },
  mounted() {
    this.reqguanye(),
      this.reqguanhua(),
      this.reqguangen(),
      this.reqduorou(),
      this.reqhualan(),
      this.reqhuasu();
  }
};
</script>

<style lang="scss" scoped>
.Classify {
  width: 100vw;
  padding-bottom: 0.8rem;
}
.seek {
  background-color: #1cbb7b;
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
    right: 1.2rem;
    border-left: 0.02rem solid rgba(110, 110, 110, 0.1);
    img {
      width: 0.5rem;
    }
  }
}
.classbody {
  display: flex;
  .van-sidebar {
    border-right: 0.15rem solid rgba(110, 110, 110, 0.1);
    width: 20vw;
  }
  .classlist {
    flex: 1;
    border-right: 0.15rem solid rgba(110, 110, 110, 0.1);

    box-sizing: border-box;
    li {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      border-bottom: 0.15rem solid rgba(110, 110, 110, 0.1);
      .classlist-t {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.1rem;
        color: #333;
        font-size: 0.28rem;
        border-bottom: 0.02rem solid rgba(110, 110, 110, 0.1);

        a {
          color: #666 !important;
        }
      }
      .classlist-b {
        padding: 0.1rem 0.1rem;
        display: flex;
        flex-wrap: wrap;
        width: 76vw;
        box-sizing: border-box;
        .classlist-i {
          padding: 0.1rem 0;
          margin-right: 0.18rem;
          border: 0;
          img {
            width: 22vw;
            height: 22vw;
          }
          p {
            width: 22vw;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

.van-sidebar-item {
  background-color: #fff;
  font-size: 0.24rem;
}
.van-sidebar-item--select {
  border-color: #1cbb7b;
  font-size: 0.27rem;
  font-weight: 600;
  color: #1cbb7b !important;
}

</style>
