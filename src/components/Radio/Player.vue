<template>
  <div class="player-wrap">
    <div class="header">
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
.player-wrap {
  .header {
    position: absolute;
    width: calc(100% - 28px);
    display: flex;
    justify-content: space-between;
    padding: 14px;
    z-index: 2;
    color: rgba(255, 255, 255, 0.86);
  }

  .title {
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .album {
    font-size: 14px;
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
    bottom: 75%;
    left: 0;
    background-image: linear-gradient(to bottom, #00000059, #0000);
  }

  .cover {
    width: 100%;
  }

  i.iconfont.icon-sound.btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .progress-bar {
    height: 10px;
    background: #2d2d2d;
  }

  .line {
    position: relative;
    height: 100%;
    background: #d5bc80;
  }

  .point {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    right: 0;
  }

  .time {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 4px 6px;
  }

  .eq {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .btn {
      font-size: 14px;
      padding: 2px 6px;
      margin: 0 2px;
      border: 1px solid #777;
      border-radius: 14px;
    }
  }

  .control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0;

    .icon-backward,
    .icon-forward {
      font-size: 22px;
      color: #777;
    }

    .icon-play,
    .icon-pause {
      font-size: 78px;
      color: #dbc692;
    }

    .icon-prev,
    .icon-next {
      font-size: 52px;
      color: #dbc692;
    }
  }

  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    .iconfont {
      margin: 10px;
      color: #999;
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>
