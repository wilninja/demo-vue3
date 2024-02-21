<template>
  <h2>{{ title }}</h2>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";

h2 {
  color: $c-elephant;
  font-size: 21px;
  font-weight: bold;
}
</style>
