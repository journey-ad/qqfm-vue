<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="item">
      <span>精品</span>
    </router-link>
    <router-link to="/category" tag="div" class="item">
      <span>分类</span>
    </router-link>
    <router-link to="/me" tag="div" class="item">
      <span>我的</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.tab {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  font-size: $font-size-medium;
  background: $color-background;
  padding: 0 90px;
  box-sizing: border-box;
  z-index: 99;
  .item {
    flex: 1;
    text-align: center;
    span {
      font-weight: 600;
      padding-bottom: 2px;
      color: $color-text-l;
    }
    &.router-link-active {
      span {
        position: relative;
        color: $color-theme;
        font-size: $font-size-medium-x;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 70%;
          height: 2px;
          border-radius: 2px;
          background: #ffcd32;
        }
      }
    }
  }
}
</style>
