<template>
  <div class="radio-footer" @click="toRadio">
    <div class="cover">
      <img
        :src="player.cover ? player.cover : require('../../assets/radio.svg')"
        :alt="player.title"
      >
    </div>
    <div class="meta">
      <div class="title">{{player.title}}</div>
      <div class="album">{{player.album}}</div>
    </div>
    <div class="control">
      <div :class="playBtnClass" @click.stop="toggle"></div>
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
.radio-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background: #202020;

  .cover {
    width: 55px;
    height: 55px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .meta {
    width: calc(100vw - 140px);
    padding: 6px;
  }

  .control {
    width: 56px;
    .icon-play,
    .icon-pause {
      padding: 8px 0;
      font-size: 38px;
      font-weight: 600;
      color: #d1b674;
    }
  }

  .title {
    font-size: 14px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 4px 0;
  }

  .album {
    font-size: 13px;
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
