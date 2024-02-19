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
h2 {
  color: #15354a;
  font-size: 24px;
  font-weight: bold;
}
</style>
