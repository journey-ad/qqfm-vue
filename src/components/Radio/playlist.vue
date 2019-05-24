<template>
  <div>
    <div class="playlist-mask"></div>
    <div class="playlist">
      <div class="list-header">
        <div class="mode">
          <i class="iconfont" :class="mode.class"></i>
          <span class="text">{{`${mode.text}(${player.playlist.length}集)`}}</span>
        </div>
      </div>
      <ul class="list">
        <li
          class="show"
          :data-id="show.id"
          :class="{current:player.show.id===show.id}"
          v-for="(show, index) in player.playlist"
          :key="show.id"
          @click="play(index)"
        >
          <div class="title">{{show.name}}</div>
          <div class="meta">
            <span class="album">{{show.album}}</span>
            <span>|</span>
            <span class="category"></span>
          </div>
        </li>
      </ul>
      <div class="close" @click="hide">关闭</div>
    </div>
  </div>
</template>

<script>
import { playMode } from "assets/js/config";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    hide() {
      this.$store.commit("HIDEPLAYLIST");
    },
    play(index) {
      this.$store.dispatch("play", { index });
    }
  },
  computed: {
    mode() {
      let mode = this.player.mode;
      return mode === playMode.sequence
        ? { text: "顺序播放", class: "icon-cycle" }
        : mode === playMode.random
        ? { text: "随机播放", class: "icon-random" }
        : { text: "单曲循环", class: "icon-single-cycle" };
    },
    ...mapGetters(["playBtnClass", "player"])
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
  .playlist-mask {
    display: block;
  }
  .playlist {
    top: 15vh;
  }
}
.playlist-mask {
  display: none;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.playlist {
  position: absolute;
  top: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  height: 85vh;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  background: $color-background;
  .list-header {
    display: flex;
    height: 55px;
    line-height: 55px;

    .mode {
      padding-left: 15px;
      .iconfont {
        font-size: $font-size-large-x;
        color: $color-text-gray;
      }

      .text {
        margin-left: 4px;
        font-size: $font-size-medium-x;
      }
    }
  }

  .list {
    min-height: 40vh;
    overflow: auto;

    .show {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 16px;
      border-bottom: 1px dashed $color-showlist-line;

      &.current {
        .title {
          color: $color-theme;
        }
      }

      .title {
        width: 100%;
        color: $color-text;
        font-size: $font-size-medium;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px;
      }

      .meta {
        color: $color-text-gray;
        font-size: $font-size-small;
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
