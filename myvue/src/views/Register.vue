<template>
  <div class="register">
    <!--顶部-->
    <div class="t">
      <img src="../assets/img/icon_arr_left.png" @click="back"/>
      <h1>用户注册</h1>
    </div>

    <!-- 用户注册 -->
    <div class="cell">
      <input type="text" id="username" placeholder="请输入用户名或电话号码" v-model="username" />
      <img src="../assets/img/username.png" />
    </div>
    <div class="cell">
      <input type="password" id="password" placeholder="请输入密码" v-model="password" />
      <img src="../assets/img/password.png" />
    </div>
    <div class="cell">
      <input type="text" id="yanzhengma" placeholder="请输入验证码" v-model="yanzhengma" />
      <img src="../assets/img/yanzhengma.png" />
    </div>
    
    <div class="lj">
      <span @click="onregister">立即注册</span>
      <span @click="gologin">立即登陆</span>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      yanzhengma: "",
      value:"",
       show: true
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    },
    onregister() {
      const { username, password, yanzhengma } = this;
      if (!username || !password || !yanzhengma) {
        Toast({
          message: "请输入用户名和密码", // 显示内容
          position: "middle", // 显示位置，默认middle
          duration: 3000 // 显示时间
        });
        return false;
      } else {
        this.$axios
          .post("/liuxinyi/api/user/register", {
            username,
            password,
            yanzhengma
          })
          .then(res => {
            const { code, msg } = res;
            if (code == 1) {
              Toast({
                message: "注册成功",
                duration: 2000
              });
              setTimeout(() => {
                this.$router.push("/login");
              }, 2000);
            } else {
              Toast(msg);
            }
          });
      }
    },
    gologin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 100vw;
}
.t {
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
    flex: 1;
    font-size: 0.34rem;
    font-weight: 300;
  }
}
.cell {
  width: 95vw;
  padding: 0.1rem 0.2rem;
  height: 0.8rem;
  position: relative;

  input {
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    border-radius: 0.1rem;
    border: 0.02rem solid #dcdcdc;
    padding: 0.1rem 0.1rem 0.1rem 0.7rem;
    width: 95vw;
    height: 0.8rem;
    font-size: 0.34rem;
  }
  img {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.14rem 0.1rem;
    top: 0.1rem;
    left: 0.2rem;
  }
}
.lj {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  span {
    background-color: #1cbb7f;
    padding: 0.2rem;
    border-radius: 0.1rem;
    color: #fff;
  }
}
</style>