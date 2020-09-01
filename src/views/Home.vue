<template>
  <div class="home">
    <canvas id="canvas"></canvas>
    <login v-if="isLogin" @loginOK="loginOK"></login>
  </div>
</template>

<script>
import Login from "components/Login.vue";
import { initBG } from "assets/js/bg.js";

export default {
  name: "Home",
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    loginOK() {
      this.$router.push({
        path: "/about"
      });
    }
  },
  components: {
    Login
  },
  mounted() {
    let canvas = document.querySelector("#canvas");
    initBG(canvas);
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #000;
  background-size: 100% 100%;
  overflow: hidden;
}

#canvas {
  width: 100%;
  height: 100%;
}
</style>
