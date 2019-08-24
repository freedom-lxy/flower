<template>
  <div class="Discover">
    <!--顶部-->
    <div class="roof">
      <img src="../assets/img/icon_arr_left.png" alt />
      <h1>发现</h1>
      <div>
        <span>荆门</span>
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 优惠-->
    <ul class="discounts">
      <li>
        <a href>
          <img src="../assets/img/flash1.png" alt />
        </a>
      </li>
      <li>
        <a href>
          <img src="../assets/img/flash2.png" alt />
        </a>
      </li>
    </ul>
    

   
  </div>
</template>

<script>
export default {
  name:'Discover',
  data(){
    return {
      active:0,
      icon:{

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Discover {
  width: 100vw;
  .roof {
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
.discounts {
  width: 100vw;
  display: flex;
  flex-direction: column;
  li {
    margin-bottom: 0.2rem;
    img {
      width: 100vw;
      height: 2.94rem;
    }
  }
}
</style>