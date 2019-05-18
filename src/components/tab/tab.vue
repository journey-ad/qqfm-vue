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
  height: 44px;
  line-height: 44px;
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
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
