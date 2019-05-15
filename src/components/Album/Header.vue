<template>
  <header class="album-header">
    <div class="mask" :style="{background: `url(${albumInfo.cover})`}"></div>
    <div class="header-left" @click="$router.back()">
      <i class="iconfont icon-return"></i>
    </div>
    <div class="title">
      {{albumInfo.name}}
      <span class="icon" v-if="albumInfo.icon">{{albumInfo.icon}}</span>
    </div>
    <div class="info">
      <div class="cover">
        <img :src="albumInfo.cover" :alt="albumInfo.name">
      </div>
      <div class="text">
        <div
          class="meta"
        >{{albumInfo.score?albumInfo.score.toFixed(1)+'分 | ':''}}{{formatDate(albumInfo.upload)}}更新</div>
        <div class="desc">{{albumInfo.desc}}</div>
      </div>
    </div>
  </header>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      albumInfo: {}
    };
  },
  methods: {
    getAlbumInfo(id) {
      this.$store.state.albumList.list.forEach(albumInfo => {
        if (albumInfo.id === id) {
          this.albumInfo = albumInfo;
        }
      });
      console.log(this.albumInfo);
    },
    formatDate(date) {
      return moment.unix(date).format("YYYY年YY月DD日");
    }
  },
  mounted() {
    this.getAlbumInfo(this.$route.query.id);
  }
};
</script>

<style lang="scss" scope>
.album-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 220px;
  color: #fff;
  background: #222;
  position: fixed;
  top: 0;
  z-index: 999;
  overflow: hidden;

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(40px);
    z-index: -1;
  }

  .header-left {
    height: 36px;
    line-height: 36px;
    padding: 4px 10px;
    box-sizing: border-box;

    .icon-return {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .title {
    text-align: left;
    font-size: 20px;
    padding: 10px 20px;
    .icon {
      position: relative;
      font-size: 10px;
      border: 1px solid #fff;
      border-radius: 4px;
      padding: 0 1px;
      top: -5px;
    }
  }

  .info {
    display: flex;
    overflow: hidden;

    .cover {
      width: 100px;
      height: 100px;
      padding-left: 14px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .text {
    flex: 1;
    padding: 0px 12px;
    font-size: 12px;
    line-height: 1.8em;
    color: #fff;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.78);

    .desc {
      height: 100px;
    }
  }
}
</style>
