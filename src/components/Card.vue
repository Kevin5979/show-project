<template>
  <div class="card" @click.stop="itemClick(item)" :class="{'c-top': tabPosition === 'top'}">
    <div class="top demo-image__lazy">
      <img class="img" v-lazy="item.img" />
    </div>
    <div class="bottom">
      <h3 class="title">{{item.title}}</h3>
      <div class="detail">{{item.detail}}</div>
    </div>
    <div class="label" v-if="item.label === 'label_views'">
      <img src="~assets/image/label_views.png" alt />
      <strong>效果展示</strong>
    </div>
    <div class="label" v-if="item.label === 'label_notes'">
      <img src="~assets/image/label_notes.png" alt />
      <strong>笔记阅读</strong>
    </div>
    <div v-if="item.sign" class="sign">
      <img src="~assets/image/sign.png" />
      <h3 v-if="item.sign === 'PC'" class="pc">PC</h3>
      <h3 v-if="item.sign === '移动'" class="yd">移动</h3>
    </div>
    <div v-if="item.downloadURL" class="download" @click.stop="download(item.downloadURL)">
      <img src="~assets/image/download.png" alt="下载" title="下载源码" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
    },
    tabPosition: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    itemClick(item) {
      this.$emit("itemClick", item);
    },
    download(downloadURL) {
      window.open(downloadURL);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 350px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  position: relative;

  &.c-top {
    width: 140px;
    height: 160px;
    padding: 5px;
    border-radius: 5px;
    .label {
      width: 20px;
      height: 60px;
      position: absolute;
      top: 0;
      right: 39px;
      z-index: 99;
      img {
        width: 60px;
        height: 70px;
      }
      strong {
        position: absolute;
        top: 16px;
        right: -40px;
        font-size: 13px;
        transform: rotate(50deg);
      }
    }
    .sign {
      position: absolute;
      top: -5px;
      left: 20px;
      img {
        width: 30px;
        height: 40px;
      }
      h3.yd {
        position: absolute;
        top: -5px;
        left: 15px;
        font-size: 14px;
        color: #000000;
      }
      h3.pc {
        position: absolute;
        top: -5px;
        left: 5px;
        font-size: 14px;
        color: #da001d;
      }
    }
    .download {
      width: 30px;
      height: 30px;
      position: absolute;
      bottom: 6px;
      left: 25px;
      z-index: 9;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .top {
      width: 100%;
      height: 250px;
      overflow: hidden;
      border-radius: 20px;
      .img {
        display: block;
        width: 100%;
        border-radius: 20px;
        transition: all 0.8s;
      }
    }
    .bottom {
      width: 100%;
      height: 130px;
      .title {
        width: 100%;
        height: 23px;
        margin: 5px 0;
        font-weight: bold;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #008c9e;
      }
      .detail {
        width: 100%;
        height: 50px;
        line-height: 25px;
        padding: 0 5px;
        text-indent: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #918686;
      }
    }
  }

  .label {
    width: 50px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 50px;
    z-index: 99;
    img {
      width: 100px;
      height: 120px;
    }
    strong {
      position: absolute;
      top: 30px;
      right: -45px;
      font-size: 18px;
      transform: rotate(50deg);
    }
  }
  .sign {
    position: absolute;
    top: -5px;
    left: 20px;
    img {
      width: 60px;
      height: 60px;
    }
    h3.yd {
      position: absolute;
      top: -5px;
      left: 15px;
      font-size: 16px;
      color: #000000;
    }
    h3.pc {
      position: absolute;
      top: -5px;
      left: 18px;
      font-size: 18px;
      color: #da001d;
    }
  }
  .download {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 100px;
    right: 25px;
    z-index: 9;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top {
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 20px;
    .img {
      display: block;
      width: 100%;
      border-radius: 20px;
      transition: all 0.8s;
    }
  }
  .bottom {
    width: 100%;
    height: 130px;
    .title {
      width: 100%;
      height: 23px;
      margin: 5px 0;
      font-weight: bold;
      padding: 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #008c9e;
    }
    .detail {
      width: 100%;
      height: 50px;
      line-height: 25px;
      padding: 0 5px;
      text-indent: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: wrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #918686;
    }
  }
}
.card:hover {
  .img {
    transform: scale(1.1);
  }
  box-shadow: 2px 2px 2px 2px #c8c8c8;
}
</style>