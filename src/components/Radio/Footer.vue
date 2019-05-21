<template>
  <div class="radio-footer" @click="toRadio">
    <div class="cover">
      <img
        :src="player.show.cover ? player.show.cover : require('../../assets/radio.svg')"
        :alt="player.title"
      >
    </div>
    <div class="meta">
      <div class="title">{{player.show.title}}</div>
      <div class="album">{{player.show.album}}</div>
    </div>
    <div class="control">
      <div :class="playBtnClass" @click.stop="toggle"></div>
      <div class="iconfont icon-nowplaying"></div>
    </div>
    <div class="line">
      <div class="progress" :style="{width:`${player.current / player.duration * 100}%`}"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    toRadio() {
      this.$router.push({
        name: "radio"
      });
    },
    ...mapActions([
      "backward",
      "prev",
      "toggle",
      "next",
      "forward",
      "getCurrentTime",
      "getDuration"
    ])
  },
  computed: mapGetters([
    "playBtnClass",
    "player",
    "currentTime",
    "durationTime",
    "progress"
  ])
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.radio-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $radio-height;
  display: flex;
  justify-content: space-between;
  background: #202020;

  .cover {
    width: $radio-height;
    height: $radio-height;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .meta {
    flex: 1;
    width: calc(100vw - 200px);
    padding: 6px;
  }

  .control {
    display: flex;
    justify-content: space-between;
    .iconfont {
      padding: 16px;
      font-size: 32px;
      font-weight: 600;
      color: #d1b674;
    }
  }

  .title {
    font-size: $font-size-small-x;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 4px 0;
  }

  .album {
    font-size: $font-size-small;
    color: #d1b674;
  }

  .line {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #2d2d2d;

    .progress {
      height: 100%;
      background: #d1b674;
    }
  }
}
</style>
