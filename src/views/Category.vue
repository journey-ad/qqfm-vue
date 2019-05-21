<template>
  <div class="category-list">
    <Shortcut :categoryList="categoryList" :categoryID="categoryID" @goAnchor="goAnchor"></Shortcut>
    <Category
      :categoryList="categoryList"
      :categoryID="categoryID"
      @setCategoryIndex="setCategoryIndex"
      ref="category"
    ></Category>
    <router-view></router-view>
  </div>
</template>

<script>
import Shortcut from "components/category/shortcut";
import Category from "components/category/category";
import apis from "apis/index";
export default {
  data() {
    return {
      categoryID: "39092",
      categoryList: []
    };
  },
  methods: {
    setCategoryID(id) {
      this.categoryID = "" + id;
    },
    setCategoryIndex(index) {
      console.log(index)
      this.setCategoryID(this.categoryList[index].id);
    },
    goAnchor(id) {
      this.setCategoryID(id);
      this.$refs.category.goAnchor(id);
    },
    getCategoryList() {
      this.categoryList = apis.getCategory();
    }
  },
  mounted() {
    this.getCategoryList();
  },
  components: {
    Shortcut,
    Category
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category-list {
  display: flex;
  margin-top: $header-height;
  height: calc(100vh - #{$header-height} - #{$radio-height});
}
</style>
