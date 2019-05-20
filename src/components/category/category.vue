<template>
  <scroll class="category" ref="childList" :probeType="3" @scroll="onScroll" :listen-scroll="true">
    <ul class="child-category" v-if="categoryList.length">
      <li
        v-for="category in categoryList"
        :key="category.id"
        class="list-category"
        ref="listCategory"
      >
        <router-link
          :to="{name:`subCategory`, params:{id: category.id,type: category.type}}"
          tag="div"
          class="list-category-type"
          :data-type="category.id"
        >
          <i class="iconfont icon-diamond"></i>
          {{category.type}}
        </router-link>
        <uL class="sub">
          <router-link
            :to="{name:`subCategory`, params:{id: sub.id,type: sub.name}}"
            tag="li"
            v-for="sub in category.list"
            :key="sub.id"
            class="list-category-sub"
          >
            <span class="name">{{sub.name}}</span>
          </router-link>
        </uL>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from "base/scroll/scroll";
import _ from "lodash";
import apis from "apis/index.js";
export default {
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      listHeight: []
      // categoryList: []
    };
  },
  props: ["categoryList", "categoryID"],
  methods: {
    // getcategoryList() {
    //   this.categoryList = apis.getCategory();
    // },
    goAnchor(id) {
      let anchor = this.$el.querySelector(`[data-type="${id}"]`);
      this.$refs.childList.scrollToElement(anchor, 0);
    },
    _calculateHeight() {
      this.listHeight = [];
      const list = this.$refs.listCategory;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    onScroll(e) {
      this.scrollY = e.y;
    }
  },
  watch: {
    categoryList() {
      requestAnimationFrame(() => {
        this._calculateHeight();
      });
    },
    scrollY(newY) {
      // console.log(this.currentIndex);
      const listHeight = this.listHeight;
      // 当滚动到顶部，newY>0
      if (newY > 0) {
        this.currentIndex = 0;
        return;
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i] - 100;
        let height2 = listHeight[i + 1] - 100;
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i;
          return;
        }
      }

      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2;
    },
    currentIndex(val) {
      this.$emit("setCategoryIndex", val);
    }
  },
  mounted() {
    // this.getcategoryList();
    // this.goAnchor(this.$route.params.id);
  },
  components: {
    Scroll
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category {
  position: relative;
  // margin-top: 24px;
  flex: 1;
  color: #fff;
  overflow: hidden;
  .child-category {
    margin: 0 24px;
    .list-category-type {
      display: block;
      text-align: center;
      font-size: $font-size-medium-x;
      padding: 24px 0;
      .iconfont {
        font-size: $font-size-medium;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .sub {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      border-radius: 5px;
      background: #292929;
      .list-category-sub {
        position: relative;
        width: 33.33%;
        padding: 18px 0;
        font-size: $font-size-small-x;
        .name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
