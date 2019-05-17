<template>
  <div class="category-right" ref="childList" @scroll="onScroll">
    <ul class="child-category">
      <li class="child" v-for="cats in categoryList" :key="cats.id">
        <span class="type" :data-type="cats.id">{{cats.type}}</span>
        <ul class="list">
          <router-link
            :to="{ name: 'subCategory', query: { id: cat.id , type: cat.name } }"
            tag="li"
            v-for="cat in cats.list"
            :key="cat.id"
          >
            <span>{{cat.name}}</span>
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import apis from "../../apis/index.js";
export default {
  data() {
    return {
      categoryList: []
    };
  },
  props: {
    categoryID: {
      type: Number,
      default: () => {
        return 1;
      }
    }
  },
  methods: {
    getcategoryList() {
      this.categoryList = apis.getCategory();
    },
    goAnchor(id) {
      var anchor = this.$el.querySelector(`[data-type="${id}"]`);
      this.$refs.childList.scrollTo({
        top: anchor.offsetTop - 20
      });
    },
    onScroll: _.throttle(function(e) {
      let top = e.target.scrollTop;
      let id;
      e.target.querySelectorAll(".type").forEach(element => {
        if (element.offsetTop <= top + 160) {
          id = element.dataset.type;
        }
      });
      id && this.$router.replace(`/categoryList/${id}`);
    }, 100)
  },
  mounted() {
    this.getcategoryList();
    // this.goAnchor(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.category-right {
  position: relative;
  flex: 1;
  overflow-y: scroll;
  color: #fff;
  .child-category {
    margin: 0 14px;
    .type {
      display: block;
      text-align: center;
      font-size: 18px;
      margin: 20px 0;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      padding: 22px 0;
      border-radius: 5px;
      background: #292929;
      li {
        position: relative;
        width: 33.33%;
        padding: 10px 0;
        font-size: 14px;
        span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .no-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .icon-nothing {
      display: block;
      color: #d7d8da;
      font-size: 3rem;
    }
    span {
      display: block;
      margin-top: 1.3rem;
      font-size: 0.6rem;
    }
  }
}
</style>
