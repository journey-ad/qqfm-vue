<template>
  <div class="category">
    <Header :title="type"></Header>
    <AlbumList @loadAlbumList="loadAlbumList"></AlbumList>
  </div>
</template>

<script>
import AlbumList from "../components/AlbumList";
import Header from "../components/Header";
import apis from "../apis/index.js";
export default {
  data() {
    return {
      type: ""
    };
  },
  methods: {
    getAlbumList(id, index) {
      let that = this;
      apis.getAlbum(id, index).then(result => {
        result.list = that.$store.state.albumList.list.concat(result.list);
        that.$store.dispatch("setAlbumList", result);
      });
    },
    loadAlbumList(index) {
      console.log(index);
      this.getAlbumList(this.$route.params.id, index);
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    this.$store.dispatch("setAlbumList", { list: [], total: 0 });
    this.$store.dispatch("setAlbumIndex", 0);
    this.loadAlbumList();
  },
  components: {
    AlbumList,
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.category {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: $color-background;
  margin-bottom: $radio-height;
}
</style>
