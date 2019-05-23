<template>
  <div class="progress">
    <div class="progress-bar" ref="progressBar" @click="progressClick">
      <div class="line" ref="line">
        <div
          class="point"
          ref="progressPoint"
          @touchstart.prevent="progressTouchStart"
          @touchmove.prevent="progressTouchMove"
          @touchend="progressTouchEnd"
        ></div>
      </div>
    </div>
    <div class="time">
      <div class="current">{{currentTime}}</div>
      <div class="total">{{durationTime}}</div>
    </div>
  </div>
</template>

<script>
import { prefixStyle } from "assets/js/dom";

const transform = prefixStyle("transform");
export default {
  props: ["progress", "currentTime", "durationTime"],
  watch: {
    progress(newPercent) {
      if (newPercent >= 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.clientWidth;
        const offsetWidth = (newPercent / 100) * barWidth;
        this._offset(offsetWidth);
      }
    }
  },
  methods: {
    progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.left = this.$refs.line.clientWidth;
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      const deltaX = e.touches[0].pageX - this.touch.startX;
      const offsetWidth = Math.min(
        this.$refs.progressBar.clientWidth,
        Math.max(0, this.touch.left + deltaX)
      );
      this._offset(offsetWidth);

      this.$emit("percentChanging", this._getPercent());
    },
    progressTouchEnd() {
      this.touch.initiated = false;
      this._triggerPercent();
    },
    progressClick(e) {
      const rect = this.$refs.progressBar.getBoundingClientRect();
      const offsetWidth = e.pageX - rect.left;
      this._offset(offsetWidth);
      // 这里当我们点击 progressPoint 的时候，e.offsetX 获取不对
      // this._offset(e.offsetX)
      this._triggerPercent();
    },
    _triggerPercent() {
      const barWidth = this.$refs.progressBar.clientWidth;
      const percent = this.$refs.line.clientWidth / barWidth;
      this.$emit("percentChange", percent);
    },
    _offset(progress) {
      this.$refs.line.dataset.progress = progress;
      this.$refs.line.style.width = `${progress}px`;
    },
    _getPercent() {
      const barWidth = this.$refs.progressBar.clientWidth;
      return this.$refs.line.clientWidth / barWidth;
    }
  },
  created() {
    this.touch = {};
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.progress {
  .progress-bar {
    height: 12px;
    background: #2d2d2d;

    .line {
      position: relative;
      height: 100%;
      // padding-left: 12px;
      background: $color-player-line;
    }

    .point {
      position: absolute;
      width: 12px;
      height: 12px;
      background: #fff;
      right: 0;
    }
  }

  .time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 6px;
    color: $color-text-gray;
  }
}
</style>
