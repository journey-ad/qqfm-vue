<template>
  <div class="album">
    <Header></Header>
    <ShowList @loadShowList="loadShowList" :total="total" v-if="$store.state.showList.length"></ShowList>
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
      console.log(id);
      let that = this;

      let list = await apis.getShowIdList(id);
      // console.log(list);
      if (Array.isArray(list)) {
        localStorage[`showIdList_${id}`] = JSON.stringify(list);

        this.total = list.length;

        apis.getShow(id, _.chunk(list, 15)[index]).then(data => {
          data = that.$store.state.showList.concat(data);
          that.$store.dispatch("setShowList", data);
        });
      } else {
        // this.$router.go(-1);
        this.$toast.fail({
          message: `${list.msg}(${list.code})`,
          position: "bottom"
        });
        this.$router.go(-1);
      }
    },
    loadShowList(index = 0) {
      this.getShowList(this.$route.params.id, index);
    }
  },
  activated() {
    console.log(this.$route);
    this.$store.dispatch("setShowList", []);
    this.$store.dispatch("setShowIndex", 1);
    this.loadShowList();
  },
  components: {
    ShowList,
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/variable.scss";
.album {
  margin-bottom: $radio-height;
}
</style>