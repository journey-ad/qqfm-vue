<template>
  <div class="category-list">
    <!-- <Left @goAnchor="goAnchor"></Left> -->
    <!-- <Right ref="right"></Right> -->
    <list-view :data="category"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
// import Left from "../components/Category/Left";
// import Right from "../components/Category/Right";
import ListView from "base/listview/listview";
import apis from "apis/index";
export default {
  data() {
    return {
      category: []
    };
  },
  methods: {
    // goAnchor(id) {
    //   this.$refs.right.goAnchor(id);
    // }
    getCategory() {
      this.category = apis.getCategory();
    }
  },
  mounted() {
    this.getCategory();
  },
  components: {
    // Left,
    // Right
    ListView
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category-list {
  display: flex;
  margin-top: $header-height;
  margin-bottom: calc(#{$radio-height} + 20px);
}
</style>
