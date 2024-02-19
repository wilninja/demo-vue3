<template>
  <div class="gallery-card">
    <router-link
      :to="{ name: 'Gallery-View', params: { gallerytype: gallery.path } }"
    >
      <span class="gallery-title">{{ gallery.title }}</span>
      <img
        :src="`/img/gallery/` + gallery.path + `/1.jpg`"
        class="gallery-thumbnail"
        :alt="gallery.title"
      />
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  gallery: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.gallery-card {
  position: relative;
  flex: 0 0 calc(25% - 14px);
  margin: 7px;
  background-color: #fff;
  text-align: center;
}

.gallery-title {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 7px;
  background-color: #202020;
  background-color: rgba(#202020, 80%);
  color: #f1f1f1;
}

.gallery-thumbnail {
  display: block;
  width: 100%;
}

a {
  display: block;
  position: relative;
}
</style>
