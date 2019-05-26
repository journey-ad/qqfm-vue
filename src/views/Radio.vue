<template>
  <div class="radio">
    <div class="player-wrap">
      <div class="header">
        <div class="iconfont icon-arrow" @click="$router.back()"></div>
        <div class="meta">
          <div class="title">{{player.show.title}}</div>
          <div class="album">{{player.show.album}}</div>
        </div>
        <i class="iconfont icon-device menu"></i>
      </div>
      <div class="player">
        <div class="cover">
          <img
            :src="player.show.cover ? player.show.cover : require('assets/radio.svg')"
            :alt="player.show.title"
          >
          <div class="mask"></div>
          <div class="volume-bar" ref="volumeBar" v-show="volume.show">
            <div class="line" ref="volumeLine">
              <div
                class="point"
                ref="volumePoint"
                @touchstart.prevent="volumeTouchStart"
                @touchmove.prevent="volumeTouchMove"
                @touchend="volumeTouchEnd"
                :data-value="volume.value"
              ></div>
            </div>
          </div>
          <i class="btn iconfont" :class="soundBtnClass" @click="toggleVolumeBar"></i>
        </div>
        <div class="pannel">
          <progress-bar
            :progress="progress"
            :currentTime="currentTime"
            :durationTime="durationTime"
            @percentChanging="onProgressBarChanging"
            @percentChange="onProgressBarChange"
          ></progress-bar>
          <div class="eq">
            <div class="btn quality">标准</div>
            <div class="btn speed" @click="showlaybackRate">语速</div>
          </div>
          <div class="control">
            <div class="iconfont btn icon-backward" @click="backward"></div>
            <div class="iconfont btn icon-prev" @click="prev"></div>
            <div :class="playBtnClass" @click="toggle"></div>
            <div class="iconfont btn icon-next" @click="next"></div>
            <div class="iconfont btn icon-forward" @click="forward"></div>
          </div>
        </div>
      </div>
      <div class="footer">
        <i class="iconfont icon-fav"></i>
        <i class="iconfont icon-download"></i>
        <i class="iconfont icon-alarm"></i>
        <i class="iconfont icon-playlist" @click="showPlaylist"></i>
      </div>
    </div>
    <playlist :class="{active:isPlaylistShow}"></playlist>
    <playback-rate :isplaybackRateShow="isplaybackRateShow" @hidePlaybackRate="hidePlaybackRate"></playback-rate>
  </div>
</template>

<script>
import Vue from "vue";
import { Slider } from "vant";
Vue.use(Slider);
import ProgressBar from "components/Radio/progress-bar";
import Playlist from "components/Radio/playlist";
import PlaybackRate from "components/Radio/playback-rate";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      volume: { show: false, value: 1, touch: {} },
      isplaybackRateShow: false
    };
  },
  props: {},
  methods: {
    showPlaylist() {
      this.$store.commit("SHOWPLAYLIST");
    },
    hidePlaylist() {
      this.$store.commit("HIDEPLAYLIST");
    },
    showlaybackRate() {
      this.isplaybackRateShow = true;
    },
    hidePlaybackRate() {
      this.isplaybackRateShow = false;
    },
    onProgressBarChanging(percent) {},
    onProgressBarChange(percent) {
      const currentTime = this.player.duration * percent;
      this.setProgress(currentTime);
      if (!this.player.playing) {
        this.toggle();
      }
    },
    volumeTouchStart(e) {
      this.volume.touch.initiated = true;
      this.volume.touch.startY = this.volume.touch.startY || e.touches[0].pageY;
      this.volume.touch.height = this.$refs.volumeBar.clientHeight;
    },
    volumeTouchMove(e) {
      if (!this.volume.touch.initiated) {
        return;
      }
      const deltaY =
        this.volume.touch.startY +
        this.volume.touch.height -
        e.touches[0].pageY;
      if (deltaY < 0 || deltaY > this.volume.touch.height) return;
      this._offsetVolume(deltaY);
    },
    volumeTouchEnd() {},
    _offsetVolume(deltaY) {
      let value = deltaY / this.volume.touch.height;
      this.volume.value = (value > 0.95 ? 1 : value > 0.15 ? value : 0).toFixed(
        2
      );
      this.$refs.volumeLine.style.height = `${deltaY}px`;
      this.$store.dispatch("setVolume", "" + this.volume.value);
    },
    toggleVolumeBar() {
      this.volume.show = !this.volume.show;
    },
    ...mapActions([
      "backward",
      "prev",
      "toggle",
      "next",
      "forward",
      "getCurrentTime",
      "getDuration",
      "setProgress"
    ])
  },
  computed: {
    soundBtnClass() {
      return this.volume.value <= 0
        ? "icon-sound-mute"
        : this.volume.value >= 0.7
        ? "icon-sound"
        : "icon-sound-half";
    },
    isPlaylistShow() {
      return this.$store.state.player.isPlaylistShow;
    },
    ...mapGetters([
      "playBtnClass",
      "player",
      "currentTime",
      "durationTime",
      "progress"
    ])
  },
  components: {
    ProgressBar,
    Playlist,
    PlaybackRate
  }
};
</script>

<style lang="scss">
@import "assets/style/variable.scss";
.radio {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: $color-background;
}

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
  }

  .player {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .cover {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 55vh;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 105%;
    }

    .mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 70%;
      left: 0;
      background-image: linear-gradient(to bottom, #00000059, #0000);
    }

    .volume-bar {
      position: absolute;
      right: 18px;
      bottom: 50px;
      width: 12px;
      height: 80px;
      border-radius: 0;
      background: #ccc;

      .line {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        max-height: 100%;
        min-height: 12px;
        background: $color-player-line-d;
        .point {
          width: 12px;
          height: 12px;
          background: $color-text;
        }
      }
    }

    .btn {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: $color-player-line;
      font-size: 28px;
      font-weight: 600;
    }
  }

  .pannel {
    position: relative;
    height: 45vh;

    .eq {
      display: flex;
      justify-content: center;
      margin: 20px 0;

      .btn {
        font-size: $font-size-small;
        padding: 4px 8px;
        margin: 0 2px;
        border: 1px solid #777;
        border-radius: 14px;
      }
    }

    .control {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-around;
      align-items: center;

      .icon-backward,
      .icon-forward {
        font-size: 18px;
        color: #777;
      }

      .icon-play,
      .icon-pause {
        font-size: 72px;
        color: $color-player-line-d;
      }

      .icon-prev,
      .icon-next {
        font-size: 36px;
        color: $color-player-line-d;
      }
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
