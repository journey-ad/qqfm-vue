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
        <progress-circle :radius="28" :percent="downloadPercent">
          <i
            class="iconfont icon-download-arrow"
            :class="{active:downloadPercent!==0}"
            @click="download"
          ></i>
        </progress-circle>
        <i class="iconfont icon-alarm" :class="{active: timer.activeIndex!==-1}" @click="showTimer"></i>
        <i class="iconfont icon-playlist" @click="showPlaylist"></i>
      </div>
    </div>
    <playlist :class="{active:isPlaylistShow}"></playlist>
    <playback-rate :isplaybackRateShow="isplaybackRateShow" @hidePlaybackRate="hidePlaybackRate"></playback-rate>
    <van-actionsheet
      class="timer"
      v-model="timer.show"
      cancel-text="取消"
      title="计时器"
      @cancle="hideTimer"
    >
      <div
        class="van-actionsheet__item"
        data-time="0"
        @click.stop="onSelect($event, -1)"
        v-if="timer.activeIndex!==-1"
      >
        取消定时器
        <span class="remaining" v-show="timer.remaining>0">({{formatTime(timer.remaining)}})</span>
      </div>
      <div
        class="van-actionsheet__item"
        :class="{active: index === timer.activeIndex}"
        :data-time="action.time"
        @click.stop="onSelect($event, index)"
        v-for="(action,index) in timer.actions"
        :key="index"
      >{{action.name}}</div>
    </van-actionsheet>
  </div>
</template>

<script>
import moment from "moment";
import FileSaver from "file-saver";
import Axios from "axios";
import Vue from "vue";
import { Slider, Actionsheet, Toast } from "vant";
Vue.use(Slider);
Vue.use(Actionsheet);
import ProgressBar from "components/Radio/progress-bar";
import Playlist from "components/Radio/playlist";
import PlaybackRate from "components/Radio/playback-rate";
import ProgressCircle from "components/Radio/progress-circle";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      volume: { show: false, value: 1, touch: {} },
      isplaybackRateShow: false,
      timer: {
        timer: null,
        show: false,
        activeIndex: -1,
        remaining: -1,
        remainingTimer: -1,
        actions: [
          { name: "播放完当前节目", time: -1 },
          { name: "15分钟", time: 15 },
          { name: "30分钟", time: 30 },
          { name: "60分钟", time: 60 },
          { name: "90分钟", time: 90 }
        ]
      },
      downloadPercent: 0
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
    showTimer() {
      this.timer.show = true;
    },
    hideTimer() {
      this.timer.show = false;
    },
    addStopPlayTimer(time) {
      let that = this;
      window.clearTimeout(that.timer.timer);
      window.clearInterval(that.timer.remainingTimer);
      if (time > 0) {
        that.timer.remaining = time;

        that.timer.remainingTimer = window.setInterval(() => {
          if (that.timer.remaining < 0) {
            window.clearInterval(that.timer.remainingTimer);
          }

          that.timer.remaining--;
        }, 1000);

        that.timer.timer = window.setTimeout(() => {
          that.timer.activeIndex = -1;
          that.pause();
        }, time * 1000);

        Toast(`将在${Math.ceil(time / 60)}分钟后自动停止播放`);
      } else if (time === 0) {
        Toast("定时器已取消");
      }
    },
    onSelect(e, index) {
      console.log(e.target.dataset.time, index);
      let time = e.target.dataset.time * 60;

      if (time < 0) {
        time = this.player.duration - this.player.current;
      }

      this.timer.activeIndex = index;
      this.addStopPlayTimer(time);
      this.timer.show = false;
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
    download() {
      let that = this,
        url = that.player.show.url,
        name = `《${that.player.show.title}》`,
        filename = `${that.player.show.album}-${that.player.show.title}.m4a`;
      Toast(`开始下载 ${name}`);
      Axios.get(url, {
        responseType: "blob",
        onDownloadProgress: e => {
          // console.log(e);
          that.downloadPercent = e.loaded / e.total;
        }
      })
        .then(res => {
          console.log(res);
          that.downloadPercent = 0;
          Toast(`${name} 下载完成`);
          FileSaver.saveAs(res.data, filename);
        })
        .catch(e => {
          that.downloadPercent = 0;
          if (location.protocol === "https:") {
            Toast(`${name} 下载失败\n请使用http协议访问并重试`);
          } else {
            Toast(`${name} 下载失败\n(${e})`);
          }
        });
    },
    formatTime(seconds) {
      return moment.utc(seconds * 1000).format("HH:mm:ss");
    },
    ...mapActions([
      "backward",
      "prev",
      "toggle",
      "pause",
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
    PlaybackRate,
    ProgressCircle
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
    .iconfont,
    .progress-circle {
      margin: 20px;
      color: $color-icon-btn;
      font-size: 28px;
      font-weight: 600;
      &.active {
        color: $color-theme-radio;
      }
    }
    .icon-download-arrow {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      padding: 7px;
      font-size: 15px;
      &.active {
        color: $color-theme-radio;
        pointer-events: none;
      }
    }
  }
}

.timer {
  color: $color-text;
  background-color: $color-background;
  .van-hairline--top-bottom::after {
    border-color: $color-background-d;
  }
  .van-actionsheet__cancel::before {
    background-color: #1f1f1f;
  }
  .van-actionsheet__cancel,
  .van-actionsheet__item {
    background-color: $color-background;
    &.active {
      color: $color-theme;
    }
    .remaining {
      color: $color-text-gray;
      font-size: $font-size-small;
    }
  }
}
</style>
