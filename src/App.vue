<template>
  <div id="app">
    <router-view/>
    <RadioFooter v-if="$route.name !== 'radio'"></RadioFooter>
    <div class="core" style="display: none">
      <audio ref="audio" autoplay="autoplay" @timeupdate="getCurrentTime" @canplay="getDuration"></audio>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import RadioFooter from "./components/Radio/Footer";
export default {
  mounted() {
    this.$store.dispatch("getAudio", this.$refs.audio);
  },
  methods: mapActions([
    "getCurrentTime",
    "getDuration"
  ]),
  components: {
    RadioFooter
  }
};
</script>

<style lang="scss">
@import url(./assets/icon/iconfont.css);
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
  color: #777;
  background-color: #222;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
