<template>
  <div class="recommend-mod">
    <h2 class="mod-title">
      <span class="txt">{{module.type}}</span>
    </h2>
    <list :data="module.item"></list>
  </div>
</template>

<script>
import List from "./list";
export default {
  props: ["module"],
  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.recommend-mod {
  padding: 15px;

  .mod-title {
    font-size: $font-size-medium-x;
    overflow: hidden;
    border-left: 1px solid $color-theme;
    color: $color-text;
    .txt {
      display: block;
      padding-left: 5px;
      color: $color-text;
    }
  }
}
</style>
