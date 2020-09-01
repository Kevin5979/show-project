<template>
  <!-- 登录控件 -->
  <div class="login" :class="{'mini':mode === 'mini'}">
    <div class="page page-front">
      <div class="page-content">
        <div class="input-row">
          <label class="label fadeIn">用户名</label>
          <input
            id="username"
            type="text"
            data-fyll="用户名"
            v-model="username"
            class="input fadeIn delay1"
          />
        </div>
        <div class="input-row">
          <label class="label fadeIn delay2">密码</label>
          <input
            id="password"
            type="password"
            data-fyll="密码"
            v-model="password"
            class="input fadeIn delay3"
          />
        </div>
        <div class="input-row perspective" @click.stop="toLogin">
          <button id="submit" class="button load-btn fadeIn delay4">
            <span class="default">
              <i class="ion-arrow-right-b"></i>登录
            </span>
            <div class="load-state">
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "assets/js/fyll.js";
import "assets/js/index.js";
import { getUser } from "service";

export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
      username: "",
      password: "",
      mode: "pc",
    };
  },
  methods: {
    toLogin() {
      getUser()
        .then((result) => {
          if (
            this.username === result.username &&
            this.password === result.password
          ) {
            this.loginSuccess();
          } else {
            this.loginFail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginSuccess() {
      window.localStorage.setItem("isLogin", 1);
      this.isLogin = true;
      this.$message({
        message: "登录成功",
        type: "success",
        duration: 1000,
      });
      this.$emit("loginOK");
    },
    loginFail() {
      this.isLogin = false;
      this.$message.error("账号或密码错误");
    },
  },
  mounted() {
    this.mode = document.documentElement.clientWidth <= 420 ? "mini" : "pc";
    window.onkeydown = (e) => {
      if (e.key === "Enter") {
        this.toLogin();
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.mini {
  width: 80%;
  height: 300px;
  .page-front {
    padding: 25px;
    box-sizing: border-box;
  }
}
</style>