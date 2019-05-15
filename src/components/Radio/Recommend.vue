<template>
  <div>
    <ul class="recommendlist">
      <li class="recommend" v-for="recommend in recommendList" :key="recommend.id">
        <img :src="recommend.cover" :alt="recommend.name">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: []
    };
  },
  props: {},
  methods: {}
};
</script>