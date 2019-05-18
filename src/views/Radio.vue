<template>
  <div class="radio">
    <Player></Player>
    <!-- <album-info></album-info> -->
    <!-- <show-list></show-list> -->
    <!-- <Recommend></Recommend> -->
  </div>
</template>

<script>
import Player from "../components/Radio/Player";
import AlbumInfo from "../components/Radio/AlbumInfo";
import ShowList from "../components/Radio/ShowList";
import Recommend from "../components/Radio/Recommend";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Player,
    AlbumInfo,
    ShowList,
    Recommend
  }
};
</script>

<style lang="scss" scoped>
.radio {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
