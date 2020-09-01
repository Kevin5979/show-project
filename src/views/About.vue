<template>
  <div class="about">
    <!-- PC端 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-if="tabPosition === 'left'"
    >
      <el-menu-item index="1" class="logo">学习展示</el-menu-item>
      <el-submenu index="2" class="avatar">
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </template>
        <el-menu-item index="2-1">
          <div @click.stop="contact">
            <i class="el-icon-user"></i>
            联系管理员
          </div>
        </el-menu-item>
        <el-menu-item index="2-2">
          <div @click.stop="support">
            <i class="el-icon-thumb"></i>
            支持作者
          </div>
        </el-menu-item>
        <el-menu-item index="2-3">
          <div @click.stop="exit">
            <i class="el-icon-switch-button"></i>
            退出登录
          </div>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 移动端 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-if="tabPosition === 'top'"
    >
      <el-menu-item index="1" class="logo m-top">学习展示</el-menu-item>
      <el-submenu index="2" class="avatar m-top">
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </template>
        <el-menu-item index="2-1">
          <div @click.stop="contact">
            <i class="el-icon-user"></i>
            联系管理员
          </div>
        </el-menu-item>
        <el-menu-item index="2-2">
          <div @click.stop="support">
            <i class="el-icon-thumb"></i>
            支持作者
          </div>
        </el-menu-item>
        <el-menu-item index="2-3">
          <div @click.stop="exit">
            <i class="el-icon-switch-button"></i>
            退出登录
          </div>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <el-tabs
      :tab-position="tabPosition"
      v-if="tabPosition === 'left'"
      style="height: 86vh; margin-bottom:200px;"
    >
      <el-tab-pane v-for="value in this.sideNav" :key="value._id" :label="value.type">
        <div class="content">
          <div v-for="item in card[value.type]" :key="item._id">
            <card :item="item" @itemClick="itemClick" :tabPosition="tabPosition" />
          </div>
          <el-backtop target=".content" :bottom="100">
            <div class="back-up">UP</div>
          </el-backtop>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-tabs
      :tab-position="tabPosition"
      v-if="tabPosition === 'top'"
      style="height: 86vh; margin-bottom:200px;"
    >
      <el-tab-pane v-for="value in this.sideNav" :key="value._id" :label="value.type">
        <div class="content">
          <div v-for="item in card[value.type]" :key="item._id">
            <card :item="item" @itemClick="itemClick" :tabPosition="tabPosition" />
          </div>
          <el-backtop target=".content" :right="20" :bottom="50">
            <div class="back-up">UP</div>
          </el-backtop>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Card from "components/Card.vue";
// import sideNav from "../../public/config/sideNav.js";
// import getData from "../../public/config/data.js";
import { getData } from "service";

export default {
  data() {
    return {
      tabPosition: "left",
      activeIndex: "1",
      sideNav: null,
      card: null,
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    contact() {
      if (this.tabPosition === "left") {
        this.$alert(
          `<div style="text-align:center;">
          <img src="https://yanxuan.nosdn.127.net/c8109f191006ad668e37cf1032fc8b1e.jpg" style="width:360px;height:360px;" alt="随影苍海东来">
          <div>邮箱: 597944688@qq.com<div>
        </div>`,
          "联系管理员",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      } else {
        this.$alert(
          `<img src="https://yanxuan.nosdn.127.net/c8109f191006ad668e37cf1032fc8b1e.jpg" style="width:200px;height:200px;display:block;margin: 0 auto; alt="随影苍海东来">`,
          " ",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      }
    },
    support() {
      if (this.tabPosition === "left") {
        this.$alert(
          `<div style="text-align:center;">
          <img src="https://ae01.alicdn.com/kf/H9fb61bfa5bbc456abbaed13de11eb78ad.jpg" style="width:360px;height:360px;" alt="随影苍海东来">
        </div>`,
          "支持作者",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      } else {
        this.$alert(
          `<div style="text-align:center; width:200px; margin:0 auto">
          <img src="https://ae01.alicdn.com/kf/H9fb61bfa5bbc456abbaed13de11eb78ad.jpg" style="width:260px;height:260px;" alt="随影苍海东来">
        </div>`,
          " ",
          {
            dangerouslyUseHTMLString: true,
          }
        );
      }
    },
    exit() {
      window.localStorage.setItem("isLogin", 0);
      this.$router.push({
        path: "/",
      });
    },
    itemClick(item) {
      window.open(item.linkURL);
    },
  },
  components: {
    Card,
  },
  created() {
    // this.sideNav = sideNav();
    // this.card = getData();
    this.tabPosition =
      document.documentElement.clientWidth <= 420 ? "top" : "left";
    getData()
      .then((result) => {
        this.sideNav = result.sideNav;
        this.card = result.data;
      })
      .catch((err) => {
        this.$message.error("获取数据失败");
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.el-tabs__header {
  margin: 0;
}
.el-menu-demo {
  width: 100%;
  padding: 0 46px;
  position: relative;
  top: 0;
  text-align: center;
  .logo {
    width: 120px;
    float: left;
    font-size: 20px;
    &.m-top {
      margin: 0 auto;
      text-align: center;
    }
  }
  .menu {
    width: 120px;
    float: left;
    font-size: 20px;
  }
  .avatar {
    width: 90px;
    float: right;
    text-align: center;
  }
}
.content {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding-bottom: 130px;
}

.back-up {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>

<style lang="scss" scoped>
</style>


