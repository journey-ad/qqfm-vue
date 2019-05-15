<template>
  <div>
    <ul class="showlist">
      <li class="show" v-for="show in showList" :key="show.id">
        <span class="title">{{show.title}}</span>
        <i class="btn play"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: []
    };
  },
  props: {},
  methods: {}
};
</script>