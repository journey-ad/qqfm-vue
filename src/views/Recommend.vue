<template>
  <div class="recommend">
    <slide>
      <div v-for="(item, index) in recommend.banner" :key="index">
        <img class="needsclick" @click="goAlbum(item.albumId)" :src="item.img">
      </div>
    </slide>
    <module v-for="(data, index) in recommend.recommend" :key="index" :module="data"></module>
  </div>
</template>

<script>
import Module from "components/recommend/module";
import Slide from "base/slide/slide";
import apis from "apis/index";
export default {
  data() {
    return {
      recommend: {}
    };
  },
  methods: {
    getRecommend() {
      this.recommend = apis.getRecommend();
    },
    goAlbum(id) {
      this.$router.push({
        name: "album",
        params: {
          id: id
        }
      });
    }
  },
  mounted() {
    this.getRecommend();
  },
  components: {
    Slide,
    Module
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.recommend {
  margin-top: $header-height;
  margin-bottom: $radio-height;
}
.slide .dots .dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 7px;
  margin: 0 7px;
  background-color: rgba(0, 0, 0, 0.6);
  &.active {
    background-color: #e5bb63;
  }
}
</style>
