<template>
  <van-list
    class="album-list"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    v-if="albumList.list.length"
  >
    <router-link
      :to="{name: 'album', params: { id: album.id }}"
      tag="div"
      class="album"
      v-for="(album,index) in albumList.list"
      :key="index"
    >
      <div class="cover">
        <div class="mask"></div>
        <img :alt="album.name" v-lazy="album.cover">
        <i class="iconfont icon-play"></i>
      </div>
      <div class="info">
        <div class="title">
          <span class="icon" v-if="album.icon">{{album.icon}}</span>
          {{album.name}}
        </div>
        <div class="msg">{{album.info}}</div>
        <div class="date">{{formatDate(album.upload)}}</div>
      </div>
    </router-link>
  </van-list>
  <loading msg="加载中..." v-else></loading>
</template>

<script>
import Loading from "base/loading/loading";
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  loading: require("assets/radio.svg"),
  error: require("assets/radio.svg")
});
import _ from "lodash";
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  computed: mapState(["albumList", "albumIndex"]),
  methods: {
    onLoad: _.throttle(function() {
      this.loading = true;
      this.$emit("loadAlbumList", this.albumIndex);
      this.$store.dispatch("setAlbumIndex", this.albumIndex + 1);
      if (
        this.albumList.list.length !== 0 &&
        this.albumList.list.length >= this.albumList.total
      ) {
        this.finished = true;
      }
      this.loading = false;
      console.log(this.albumList.list.length, this.albumList.total);
    }, 1000),
    formatDate(date) {
      return moment.unix(date).format("YYYY-MM-DD");
    }
  },
  components: {
    Loading
  },
  mounted() {
    // this.getAlbumList()
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.album-list {
  display: flex;
  flex-direction: column;
  margin-top: $header-height;

  .album {
    display: flex;
    justify-content: space-between;
    margin: 10px;

    .cover {
      position: relative;
      width: 120px;
      height: 120px;

      .mask {
        position: absolute;
        top: 50%;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0)
        );
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
      .icon-play {
        position: absolute;
        left: 8px;
        bottom: 8px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 23px;
        font-weight: 600;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100% - 134px);
      margin: 4px 10px;

      .title {
        color: #fff;
        font-size: $font-size-small-x;
        margin: 4px 0;
        .icon {
          font-size: 12px;
          border: 1px solid #fff;
          border-radius: 3px;
          padding: 0 1px;
        }
      }
      .msg,
      .date {
        font-size: $font-size-small-s;
        line-height: $font-size-medium;
        margin: 6px 0;
      }
    }
  }
}
</style>
