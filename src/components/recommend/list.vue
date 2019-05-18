<template>
  <ul class="radio-list">
    <li class="item bBor" v-for="(item,index) in data" :key="index" @click="goAlbum(item.albumId)">
      <div class="pic" v-lazy:background-image="item.cover">
        <div class="mask"></div>
        <i class="iconfont icon-play"></i>
      </div>
      <div class="main">
        <div class="inner">
          <div class="title">{{item.title}}</div>
          <div class="info">{{item.info}}</div>
          <div class="meta">{{item.meta}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  loading: require("assets/radio.svg"),
  error: require("assets/radio.svg")
});
export default {
  props: ["data"],
  methods: {
    goAlbum(id){
      this.$router.push({
        name: 'album',
        params: {
          id: id
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.radio-list {
  .item {
    display: flex;
    padding: 15px 0;
    position: relative;
    font-size: 13px;

    &:last-child {
      padding-bottom: 0;
    }

    &:after {
      background: rgba(255, 255, 255, 0.1);
    }

    &:last-child:after {
      display: none;
    }

    .pic {
      display: block;
      width: 60px;
      height: 60px;
      min-width: 56px;
      min-height: 56px;
      overflow: hidden;
      position: relative;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      .mask {
        position: absolute;
        width: 100%;
        height: 35%;
        bottom: 0;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0)
        );
      }
      i {
        position: absolute;
        left: 4px;
        bottom: 4px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .main {
    flex: 1;
    min-width: 0;
    line-height: 1;
    position: relative;
  }

  .title {
    font-size: 15px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .info {
    color: rgba(255, 255, 255, 0.4);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  .meta {
    color: rgba(255, 255, 255, 0.4);
    display: flex;
    margin-top: 5px;
  }
}
</style>
