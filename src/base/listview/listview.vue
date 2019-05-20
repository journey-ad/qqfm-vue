<template>
  <!-- <scroll :data="data" class="category" ref="category"> -->
  <div class="category">
    <ul class="child-category">
      <li v-for="category in data" :key="category.id" class="list-category" ref="listCategory">
        <router-link
          :to="{name:`subCategory`, params:{id: category.id,type: category.type}}"
          tag="div"
          class="list-category-type"
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
    <!-- <div
      class="list-shortcut"
      @touchstart="onShortcutTouchStart"
      @touchmove.stop.prevent="onShortcutTouchMove"
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="index"
          :data-index="index"
          class="item"
          :class="{'current':currentIndex===index}"
        >{{item}}</li>
      </ul>
    </div>
    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
    <div v-show="!data.length" class="loading-container">
      <van-loading/>
    </div>-->
  </div>
  <!-- </scroll> -->
</template>

<script>
// import Scroll from "base/scroll/scroll";
import { getData } from "assets/js/dom";

const TITLE_HEIGHT = 30;
const ANCHOR_HEIGHT = 18;

export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  mounted() {
    console.log(this.data);
  },
  components: {
    // Scroll
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
