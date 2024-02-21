<template>
  <div class="gallery-card">
    <router-link
      class="gallery-link"
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
@import "../../assets/scss/helpers.scss";

.gallery-card {
  position: relative;
  flex: 0 0 calc(100% - 14px);
  margin: 7px;
  background-color: #fff;
  text-align: center;

  @include media-breakpoint-up(sm) {
    flex: 0 0 calc(50% - 14px);
  }

  @include media-breakpoint-up(md) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @include media-breakpoint-up(lg) {
    flex: 0 0 calc(25% - 14px);
  }
}

.gallery-title {
  display: block;
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 7px;
  background-color: $c-mine-shaft;
  background-color: rgba($c-mine-shaft, 80%);
  color: $c-seashell;
}

.gallery-link {
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  .gallery-thumbnail {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    .gallery-thumbnail {
      transform: scale(1.2);
    }
  }
}
</style>
