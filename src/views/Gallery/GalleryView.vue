<template>
  <div class="gallery-view">
    <router-link to="/gallery">Back to Gallery</router-link>
    <TitleHeader :title="`Gallery: ` + getGalleryTitle()" />
    <div class="gallery-container">
      <PicCard v-for="pic in picList" :pic="pic" :key="pic.id" />
    </div>
  </div>
</template>

<script setup>
import PicCard from "@/components/PicCard/PicCard.vue";
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";

import { inject, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const axios = inject("axios");
const route = useRoute();
// const router = useRouter();
const store = useStore();

const picList = ref([]);

const resultGallery = async (galleryPath) => {
  picList.value = [...[]];
  await axios
    .get(`/json/gallery-${galleryPath}.json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      picList.value = [...response.data.gallery];
    })
    .catch(() => {
      return;
    });
};

const getGalleryTitle = () => {
  const result = store.state.galleryList.filter(
    (gallery) => gallery.path === route.params.gallerytype
  );

  if (result.length > 0) {
    return result[0].title;
  }

  return "N/A";
};

watch(
  () => route.params.gallerytype,
  () => {
    resultGallery(route.params.gallerytype);
  }
);

onMounted(() => {
  resultGallery(route.params.gallerytype);
});
</script>

<style lang="scss" scoped>
.gallery-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: stretch;
  margin: -7px;
}
</style>
