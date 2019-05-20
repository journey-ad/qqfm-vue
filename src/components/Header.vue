<template>
  <header class="header">
    <div class="header-left" @click="$router.back()">
      <i class="iconfont icon-return"></i>
    </div>
    <div class="header-center" v-if="title">{{title}}</div>
    <div class="header-right"></div>
  </header>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $header-height;
  color: #fff;
  background: #222;
  position: fixed;
  text-align: center;
  top: 0;
  z-index: 999;
  line-height: $header-height;
  .header-left {
    width: 10%;
    height: 100%;
    .icon-return {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .header-center {
    width: 80%;
    height: 100%;
    font-size: $font-size-medium;
    font-weight: bold;
  }
  .header-right {
    width: 10%;
    height: 100%;
  }
}
</style>
