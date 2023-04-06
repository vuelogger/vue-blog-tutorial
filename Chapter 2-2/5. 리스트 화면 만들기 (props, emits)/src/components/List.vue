<template>
  <ul>
    <li v-for="item of list[selected]">{{ item }}</li>
  </ul>
</template>

<script setup>
const { selected } = defineProps(["selected"]);

const list = {
  HTML: ["HTML 기본 1", "HTML 기본 2", "HTML 기본 3"],
  CSS: ["CSS 기본 1", "CSS 기본 2", "CSS 기본 3"],
  Javascript: ["JS 기본 1", "JS 기본 2", "JS 기본 3"],
  Vue: ["Vue 기본 1"],
  React: ["React 기본 1"],
};
</script>
