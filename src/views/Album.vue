<template>
  <div class="album">
    <Header></Header>
    <ShowList @loadShowList="loadShowList" :total="total"></ShowList>
  </div>
</template>

<script>
import ShowList from "../components/ShowList";
import Header from "../components/Album/Header";
import apis from "../apis/index.js";
import _ from "lodash";
export default {
  data() {
    return {
      total: 0
    };
  },
  methods: {
    async getShowList(id, index = 0) {
      let that = this;

      let list = await apis.getShowIdList(id).then(list => {
        return list;
      });
      localStorage[`showIdList_${id}`] = JSON.stringify(list);

      this.total = list.length
      console.log(this.total)

      apis.getShow(id, _.chunk(list, 15)[index]).then(data => {
        data = that.$store.state.showList.concat(data);
        that.$store.dispatch("setShowList", data);
      });
    },
    loadShowList(index) {
      console.log(index);
      this.getShowList(this.$route.query.id, index);
    }
  },
  mounted() {
    this.$store.dispatch("setShowList", []);
    this.$store.dispatch("setShowIndex", 0);
  },
  components: {
    ShowList,
    Header
  }
};
</script>

<style lang="scss" scoped>
.album {
  margin-bottom: $radio-height;
}
</style>