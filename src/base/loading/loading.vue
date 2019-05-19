<template>
  <div class="loading">
    <van-loading class="icon"></van-loading>
    <div class="text">{{msg}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
export default {
  props: {
    msg: {
      type: String,
      default: "加载中..."
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: $color-text-gray;
  .icon {
    margin: 8px auto;
  }
  .text {
    font-size: $font-size-small-s;
  }
}
</style>
