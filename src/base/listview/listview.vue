<template>
  <scroll :data="data" class="category" ref="category">
    <ul class="child-category">
      <li v-for="category in data" :key="category.id" class="list-category" ref="listCategory">
        <h2 class="list-category-type">{{category.type}}</h2>
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
  </scroll>
</template>

<script>
import Scroll from "base/scroll/scroll";
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
    Scroll
  }
};
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  margin-top: 14px;
  flex: 1;
  overflow-y: scroll;
  color: #fff;
  .child-category {
    margin: 0 14px;
    .list-category-type {
      display: block;
      text-align: center;
      font-size: 18px;
      margin: 20px 0;
    }
    .sub {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      padding: 22px 0;
      border-radius: 5px;
      background: #292929;
      .list-category-sub {
        position: relative;
        width: 33.33%;
        padding: 10px 0;
        font-size: 14px;
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
