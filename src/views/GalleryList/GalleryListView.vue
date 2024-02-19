<template>
  <div class="gallery-list-view">
    <TitleHeader title="Gallery List" />

    <div class="gallery-list-container">
      <GalleryCard
        v-for="gallery in galleryList"
        :gallery="gallery"
        :key="gallery.id"
      />
    </div>
  </div>
</template>

<script setup>
import GalleryCard from "@/components/GalleryCard/GalleryCard.vue";
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const galleryList = computed(() => store.state.galleryList);
</script>

<style lang="scss" scoped>
.gallery-list-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: stretch;
  margin: -7px;
}
</style>
