<template>
  <div id="app">
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <RadioFooter v-if="$route.name !== 'radio'"></RadioFooter>
    <div class="core" style="display: none">
      <audio
        ref="audio"
        autoplay="autoplay"
        @timeupdate="getCurrentTime"
        @canplay="getDuration"
        @ended="end"
      ></audio>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Tab from "./components/tab/tab";
import RadioFooter from "./components/Radio/Footer";
export default {
  mounted() {
    this.$store.dispatch("getAudio", this.$refs.audio);
  },
  methods: mapActions(["getCurrentTime", "getDuration", "end"]),
  components: {
    Tab,
    RadioFooter
  }
};
</script>
