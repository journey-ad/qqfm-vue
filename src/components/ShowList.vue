<template>
  <van-list
    class="show-list"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="show" v-for="show in showList" :key="show.id" @click="play(show)">
      <div class="title">{{show.name}}</div>
      <div class="duration">时长{{formatTime(show.duration)}}</div>
    </div>
  </van-list>
</template>

<script>
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
  props: ["total"],
  computed: mapState(["showList", "showIndex"]),
  methods: {
    onLoad: _.throttle(function() {
      this.loading = true;
      this.$emit("loadShowList", this.showIndex);
      this.$store.dispatch("setShowIndex", this.showIndex + 1);
      if (this.showList.length !== 0 && this.showList.length >= this.total) {
        this.finished = true;
      }
      this.loading = false;
      console.log(this.showList.length, this.total);
    }, 1000),
    play(show) {
      this.$store.dispatch("sendShow", show);
    },
    formatTime(seconds) {
      return moment.utc(seconds * 1000).format("HH:mm:ss");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variable.scss";
.show-list {
  display: flex;
  flex-direction: column;
  margin-top: 220px;

  .show {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
    padding: 15px;
    border-bottom: 1px dashed $color-showlist-line;

    .title {
      width: 100%;
      color: $color-text;
      font-size: $font-size-small;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 10px;
    }

    .duration {
      color: $color-text-gray;
      font-size: $font-size-small-s;
    }
  }
}
</style>
