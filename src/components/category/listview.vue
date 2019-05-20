<template>
  <!-- <scroll :data="data" class="category" ref="category"> -->
  <div class="category">
    
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
import _ from "lodash";
import { getData } from "assets/js/dom";

const TITLE_HEIGHT = 30;
const ANCHOR_HEIGHT = 18;

export default {
  data() {
    return {
      categoryID: ""
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    goAnchor(e) {
      if (e.target.tagName === "LI") {
        // let anchor = this.$el.querySelector(`[data-type="${e.target.dataset.id}"]`);
        // this.$refs.childList.scrollTo({
        //   top: anchor.offsetTop - 20
        // });
      }
    },
    onScroll: _.throttle(function(e) {
      let top = e.target.scrollTop;
      let id;
      e.target.getElementsByClassName("type").forEach(element => {
        if (element.offsetTop <= top + 160) {
          id = element.dataset.type;
        }
      });
    }, 100)
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
</style>
