<template>
  <div class="category-shortcut">
    <ul @click="goAnchor">
      <li
        :class="{'active': getCategoryID === category.id}"
        :data-id="category.id"
        v-for="category in categoryList"
        :key="category.id"
      >{{category.type}}</li>
    </ul>
  </div>
</template>

<script>
import apis from "apis/index.js";
export default {
  data() {
    return {
      // categoryList: []
    };
  },
  computed: {
    getCategoryID() {
      return this.categoryID;
    }
  },
  props: ["categoryList", "categoryID"],
  methods: {
    // getCategoryList() {
    //   this.categoryList = apis.getCategory();
    // },
    goAnchor(e) {
      if (e.target.tagName === "LI") {
        this.$emit("goAnchor", e.target.dataset.id);
      }
    }
  },
  mounted() {
    // this.getCategoryList();
    // console.log(this.categoryList);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category-shortcut {
  width: 68px;
  text-align: left;
  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    li {
      position: relative;
      font-size: 13px;
      padding: 18px 5px;
      &.active {
        color: #d1b675;
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 3px;
          height: 3px;
          margin: 23px 0;
          top: 0;
          left: 0;
          background: #d1b675;
        }
      }
    }
  }
}
</style>
