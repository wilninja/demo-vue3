<template>
  <header class="top-bar">
    <div class="logo-container" v-if="isLogin()">
      <LogoIcon class="logo-top-bar" />
    </div>

    <nav class="main-nav">
      <span><router-link to="/">Home</router-link></span>
      <span><router-link to="/about">About</router-link></span>
      <span v-if="menuGalleryList.length > 0"
        ><router-link to="/gallery">Gallery</router-link></span
      >
      <span v-for="menuItem in menuGalleryList" :key="menuItem.id">
        <router-link
          :to="{
            name: 'Gallery-View',
            params: { gallerytype: menuItem.path },
          }"
          >{{ menuItem.title }}</router-link
        >
      </span>
      <span
        ><router-link to="/edit-gallery-list"
          >Edit Gallery List</router-link
        ></span
      >
    </nav>
  </header>
</template>

<script setup>
import LogoIcon from "@/components/LogoIcon/LogoIcon.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const menuGalleryList = ref([]);

watch(
  () => store.state.galleryList,
  (newGalleryList) => {
    menuGalleryList.value = [...newGalleryList];
  }
);

function isLogin() {
  return route.name !== "Home";
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";

.top-bar {
  display: grid;
  grid-template-areas:
    "logo-container"
    "main-nav";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  position: relative;
  width: 100%;
  z-index: 20;
  padding: 0 14px;
  background-color: $c-mine-shaft;
  background-color: rgba($c-mine-shaft, 80%);

  @include media-breakpoint-up(lg) {
    grid-template-areas: "logo-container main-nav";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
}

.logo-container {
  display: flex;
  grid-area: logo-container;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 7px 0;

  .logo-top-bar {
    width: 80px;
  }
}

.main-nav {
  display: flex;
  grid-area: main-nav;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 7px 21px;
  min-height: 50px;
  margin: 0 0 7px;
  padding: 0 21px;

  @include media-breakpoint-up(lg) {
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  span {
    display: inline-block;

    &:first-child {
      margin: 0;
    }
  }

  a {
    color: $c-seashell;
    text-decoration: none;

    &:hover {
      color: $c-smalt-blue;
    }
  }
}
</style>
