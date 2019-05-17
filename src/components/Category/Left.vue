<template>
  <div class="category-left">
    <ul @click="goAnchor">
      <router-link
        tag="li"
        :to="'/categoryList/' + category.id"
        :class="{'active': categoryID === category.id}"
        :data-id="category.id"
        v-for="category in categoryList"
        :key="category.id"
      >{{category.type}}</router-link>
    </ul>
  </div>
</template>

<script>
import apis from "../../apis/index.js";
export default {
  data() {
    return {
      categoryList: []
    };
  },
  methods: {
    getCategoryList() {
      this.categoryList = apis.getCategory();
    },
    goAnchor(e) {
      if (e.target.tagName === "LI") {
        this.$emit("goAnchor", e.target.dataset.id);
      }
    }
  },
  props: {
    categoryID: {
      type: Number,
      default: () => {
        return 1;
      }
    }
  },
  mounted() {
    this.getCategoryList();
    console.log(this.categoryList);
  }
};
</script>

<style lang="scss" scoped>
.category-left {
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
      &.router-link-active {
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
