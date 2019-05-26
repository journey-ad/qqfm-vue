<template>
  <div class="playback-rate" :class="{active: isplaybackRateShow}">
    <div class="rate-mask"></div>
    <div class="rate">
      <div class="header">语速调整</div>
      <div class="ratebar" ref="line">
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div
          class="point"
          ref="point"
          :data-ratio="ratioText"
          @touchstart.prevent="progressTouchStart"
          @touchmove.prevent="progressTouchMove"
          @touchend="progressTouchEnd"
        ></div>
      </div>
      <div class="close" @click="hidePlaybackRate">确定</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

import { playMode } from "assets/js/config";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ratio: "1.0"
    };
  },
  props: ["isplaybackRateShow"],
  methods: {
    hidePlaybackRate() {
      this.$emit("hidePlaybackRate");
    },
    play(index) {
      // this.$store.dispatch("play", { index });
    },
    progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.lineWidth = this.$refs.line.clientWidth;
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      const deltaX = e.touches[0].pageX - 25;
      if (deltaX < 0 || deltaX > this.touch.lineWidth) return;
      this._offset(deltaX);
    },
    progressTouchEnd() {
      this.touch.initiated = false;
      this.$store.dispatch("setPlaybackRate", this.ratio);
      Toast(`播放速率调整为${this.ratio}x`);
    },
    _offset(progress) {
      this.ratio = (
        (progress / this.touch.lineWidth) * (2.0 - 0.5) + // 当前X值比上line的宽度 乘以可视数值宽度(2.0-0.5) 再加上0.5起始值 即为最终结果
        0.5
      ).toFixed(2);
      this.$refs.point.style.left = `${progress - 5}px`; // 减去point宽度一半
    }
  },
  computed: {
    ratioText() {
      return String(this.ratio).padEnd(4, "0");
    }
  },
  created() {
    this.touch = {};
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.active {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  .rate-mask {
    display: block;
  }
  .rate {
    top: 72vh;
  }
}

.rate-mask {
  display: none;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.rate {
  position: absolute;
  top: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24px;
  transition: all 0.2s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $color-background;
  .header {
    margin: 12px 0;
  }
  .ratebar {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2px;
    background: #999;

    .key {
      position: relative;
      bottom: 2px;
      width: 2px;
      height: 6px;
      background: #999;
      &::after {
        font-size: 10px;
        position: absolute;
        top: 14px;
        left: -7px;
      }

      &:nth-of-type(1)::after {
        content: "0.5x";
      }

      &:nth-of-type(2)::after {
        content: "1.0x";
      }

      &:nth-of-type(3)::after {
        content: "1.5x";
      }

      &:nth-of-type(4)::after {
        content: "2.0x";
      }
    }

    .point {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $color-theme;
      top: -5px;
      left: 115px;
      &::before {
        content: attr(data-ratio) "x";
        display: block;
        position: absolute;
        top: -28px;
        left: -14px;
        font-size: 14px;
        background: #666;
        color: $color-theme;
        padding: 3px 8px;
        border-radius: 10px;
      }
    }
  }
  .close {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: $font-size-medium-x;
  }
}
</style>
