<template>
  <div class="album-info">
    <img :src="album.cover" :alt="album.name" class="ablum-cover">
    <div class="info">
      <div class="name">{{album.name}}</div>
      <div class="artist">{{album.artist}}</div>
    </div>
    <div class="desc">{{album.desc}}</div>
  </div>
</template>

<script>
export default {
  
}
</script>