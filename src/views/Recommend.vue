<template>
  <div class="recommend">
    <slider>
      <div v-for="(item, index) in recommend.banner" :key="index">
        <a :href="`/album/${item.albumId}`">
          <img class="needsclick" @ load="loadImage" :src="item.img">
        </a>
      </div>
    </slider>
    <module v-for="(data, index) in recommend.recommend" :key="index" :module="data"></module>
  </div>
</template>

<script>
import Module from "components/recommend/module";
import Slider from "base/slider/slider";
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
    }
  },
  mounted() {
    this.getRecommend();
  },
  components: {
    Slider,
    Module
  }
};
</script>

<style lang="scss" scoped>
.slide .dots .dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  margin: 0 3px;
  background-color: rgba(0, 0, 0, 0.6);
  &.active {
    background-color: #e5bb63;
  }
}
</style>
