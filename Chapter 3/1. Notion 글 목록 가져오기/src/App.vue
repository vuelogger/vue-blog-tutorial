<template>
  <MenuBar @click-category="changeCategory" />
  <PostList :selected-category="selectedCategory" />
</template>

<script setup>
import { ref } from "vue";
import MenuBar from "./components/MenuBar.vue";
import PostList from "./components/PostList.vue";

const selectedCategory = ref("HTML");
const changeCategory = function (category) {
  selectedCategory.value = category;
};
</script>
