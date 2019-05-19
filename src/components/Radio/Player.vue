<template>
  <div class="player-wrap">
    <div class="header">
      <div class="iconfont icon-arrow"></div>
      <div class="meta">
        <div class="title">{{player.title}}</div>
        <div class="album">{{player.album}}</div>
      </div>
      <i class="iconfont icon-device menu"></i>
    </div>
    <div class="player">
      <div class="cover">
        <img
          :src="player.cover ? player.cover : require('../../assets/radio.svg')"
          :alt="player.title"
        >
        <div class="mask"></div>
        <i class="iconfont icon-sound btn"></i>
      </div>
      <div class="progress">
        <div class="progress-bar">
          <div class="line" :data-progress="progress" :style="{width: progress+'%'}">
            <div class="point"></div>
          </div>
        </div>
        <div class="time">
          <div class="current">{{currentTime}}</div>
          <div class="total">{{durationTime}}</div>
        </div>
      </div>
      <div class="eq">
        <div class="btn quality">标准</div>
        <div class="btn speed">语速</div>
      </div>
      <div class="control">
        <div class="iconfont btn icon-backward" @click="backward"></div>
        <div class="iconfont btn icon-prev" @click="prev"></div>
        <div :class="playBtnClass" @click="toggle"></div>
        <div class="iconfont btn icon-next" @click="next"></div>
        <div class="iconfont btn icon-forward" @click="forward"></div>
      </div>
    </div>
    <div class="footer">
      <i class="iconfont icon-fav"></i>
      <i class="iconfont icon-download"></i>
      <i class="iconfont icon-alarm"></i>
      <i class="iconfont icon-playlist"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: {},
  methods: mapActions([
    "backward",
    "prev",
    "toggle",
    "next",
    "forward",
    "getCurrentTime",
    "getDuration"
  ]),
  computed: mapGetters([
    "playBtnClass",
    "player",
    "currentTime",
    "durationTime",
    "progress"
  ]),
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variable.scss";
.player-wrap {
  .header {
    position: absolute;
    width: calc(100% - 28px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 14px;
    line-height: 1.2;
    z-index: 2;
    color: rgba(255, 255, 255, 0.86);
  }

  .icon-arrow {
    width: 100%;
    font-size: 38px;
    line-height: 6px;
    transform: scaleY(0.8);
    margin: 10px 0;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }

  .meta {
    overflow: hidden;
    margin-right: 20px;
  }

  .title {
    font-size: $font-size-large-x;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .album {
    font-size: $font-size-small-x;
    margin: 6px 0;
  }

  .menu {
    font-size: 24px;
  }

  .player {
    height: 100vh;
  }

  .cover {
    position: relative;
    overflow: hidden;
    height: 55vh;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 105%;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 70%;
    left: 0;
    background-image: linear-gradient(to bottom, #00000059, #0000);
  }

  .cover {
    width: 100%;
  }

  .icon-sound.btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #d5c597;
    font-size: 28px;
    font-weight: 600;
  }

  .progress-bar {
    height: 12px;
    background: #2d2d2d;
  }

  .line {
    position: relative;
    height: 100%;
    background: $color-player-line;
  }

  .point {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fff;
    right: 0;
  }

  .time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 6px;
    color: $color-text-gray;
  }

  .eq {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .btn {
      font-size: 12px;
      padding: 4px 8px;
      margin: 0 2px;
      border: 1px solid #777;
      border-radius: 14px;
    }
  }

  .control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8vh 8vw;

    .icon-backward,
    .icon-forward {
      font-size: 20px;
      color: #777;
    }

    .icon-play,
    .icon-pause {
      font-size: 84px;
      color: $color-player-line-d;
    }

    .icon-prev,
    .icon-next {
      font-size: 41px;
      color: $color-player-line-d;
    }
  }

  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    .iconfont {
      margin: 20px;
      color: #999;
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>
