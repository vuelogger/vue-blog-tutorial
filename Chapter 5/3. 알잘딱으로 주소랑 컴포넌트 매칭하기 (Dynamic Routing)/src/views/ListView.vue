<template>
  <ul>
    <li v-for="item of list[$route.params.category]">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const list = {
  html: ["HTML 기본 1", "HTML 기본 2", "HTML 기본 3"],
  css: ["CSS 기본 1", "CSS 기본 2", "CSS 기본 3"],
  javascript: ["JS 기본 1", "JS 기본 2", "JS 기본 3"],
  vue: ["Vue 기본 1"],
  react: ["React 기본 1"],
};
</script>
