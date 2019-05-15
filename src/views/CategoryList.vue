<template>
  <div class="category-list">
    <Left @goAnchor="goAnchor"></Left>
    <Right ref="right"></Right>
  </div>
</template>

<script>
import Left from "../components/CategoryList/Left";
import Right from "../components/CategoryList/Right";
export default {
  data() {
    return {};
  },
  methods: {
    goAnchor(id){
      this.$refs.right.goAnchor(id)
    }
  },
  components: {
    Left,
    Right
  }
};
</script>

<style lang="scss" scoped>
.category-list {
  display: flex;
  height: calc(100vh - #{$radio-height});
}
</style>
