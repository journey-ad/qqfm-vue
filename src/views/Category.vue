<template>
  <div class="category-list">
    <Left @goAnchor="goAnchor"></Left>
    <Right ref="right"></Right>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from "../components/Category/Left";
import Right from "../components/Category/Right";
export default {
  data() {
    return {};
  },
  methods: {
    goAnchor(id) {
      this.$refs.right.goAnchor(id);
    }
  },
  components: {
    Left,
    Right
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category-list {
  display: flex;
  height: calc(100vh - #{$radio-height});
}
</style>
