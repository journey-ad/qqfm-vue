<template>
  <div class="category">
    <Header :title="this.$route.query.type"></Header>
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
      this.getAlbumList(this.$route.query.id, index);
    }
  },
  mounted() {
    this.$store.dispatch("setAlbumList", { list: [], total: 0 });
    this.$store.dispatch("setAlbumIndex", 0);
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
  margin-bottom: $radio-height;
}
</style>
