<template>
  <TopBar />
  <div class="wrapper">
    <router-view class="container" />
  </div>
  <div class="background-img"></div>
  <div class="background-pattern"></div>
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

onMounted(() => {
  if (store.getters.getGalleryList.length === 0) {
    resultGalleryList();
  }
});
</script>

<style lang="scss">
@import "./assets/scss/helpers.scss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.background-img {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  background: $c-mine-shaft url("./assets/img/background.jpg") no-repeat center
    center;
  background-size: cover;
}

.background-pattern {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  background: transparent url("./assets/img/bg-pattern.png") repeat center
    center;
}

.container {
  position: relative;
  z-index: 30;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding: 14px;
  background-color: $c-seashell;
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
  color: $c-bay-many;
  text-decoration: none;

  &:hover {
    color: $c-smalt-blue;
  }
}

button {
  cursor: pointer;
}

hr {
  border: 7px solid $c-bay-many;
  border-radius: 5px;
}
</style>
