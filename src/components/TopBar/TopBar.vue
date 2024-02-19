<template>
  <header class="top-bar">
    <div class="logo-container">
      <LogoIcon class="logo-top-bar" v-if="isLogin()" />
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
.top-bar {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 14px;
  background-color: #202020;
  background-color: rgba(#202020, 80%);
}

.logo-container {
  flex: 0 0 100px;
  padding: 14px 0;
}

.main-nav {
  flex: 1;
  margin: 0;
  padding: 0;
  text-align: right;

  span {
    display: inline-block;
    margin: 0 0 0 21px;
    padding: 14px 0;

    &:first-child {
      margin: 0;
    }
  }

  a {
    color: #f1f1f1;
    text-decoration: none;

    &:hover {
      color: #598392;
    }
  }
}
</style>
