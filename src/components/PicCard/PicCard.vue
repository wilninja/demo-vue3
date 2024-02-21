<template>
  <div class="pic-card">
    <img :src="pic.src" class="pic-thumbnail" :alt="pic.title" />
    <p class="pic-title">{{ pic.title }}</p>
    <p class="pic-description">{{ pic.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  pic: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";

.pic-card {
  position: relative;
  flex: 0 0 calc(100% - 14px);
  margin: 7px;
  background-color: $c-seashell;
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

.pic-description {
  padding: 0 7px;
  font-size: 12px;
  text-align: left;
}

.pic-title {
  padding: 0 7px;
  font-weight: bold;
}

.pic-thumbnail {
  display: block;
  width: 100%;
}
</style>
