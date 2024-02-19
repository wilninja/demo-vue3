<template>
  <div class="background-pattern"></div>
  <TopBar />
  <div class="wrapper">
    <router-view class="container" />
  </div>
</template>

<script setup>
import TopBar from "@/components/TopBar/TopBar.vue";

import { inject, onMounted } from "vue";
import { useStore } from "vuex";

const axios = inject("axios");
const store = useStore();

const resultGalleryList = async () => {
  await axios
    .get("/json/gallery-list.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      store.commit("updateGalleryList", response.data.galleryList);
    });
};

function demandGalleryList() {
  resultGalleryList();
}

onMounted(() => {
  if (store.getters.getGalleryList.length === 0) {
    demandGalleryList();
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  background: #202020 url("./assets/img/background.jpg") no-repeat center center;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.background-pattern {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  background: transparent url("./assets/img/bg-pattern.png") repeat center
    center;
}

.container {
  position: relative;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 980px;
  padding: 14px;
  background-color: #f1f1f1;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
}

.wrapper {
  margin: 14px 0 0;
  padding: 0 14px;
}

a {
  font-weight: bold;
  color: #22577a;
  text-decoration: none;

  &:hover {
    color: #598392;
  }
}

button {
  cursor: pointer;
}

hr {
  border: 7px solid #22577a;
  border-radius: 5px;
}
</style>
