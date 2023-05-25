<template>
  <MenuBar @click-category="changeCategory" />
  <PostList @click-post="changePost" :selected-category="selectedCategory" />
  <PostContent :id="selectedId" />
</template>

<script setup>
import { ref } from "vue";
import MenuBar from "./components/MenuBar.vue";
import PostList from "./components/PostList.vue";
import PostContent from "./components/PostContent.vue";

const selectedCategory = ref("HTML");
const changeCategory = function (category) {
  selectedCategory.value = category;
};

const selectedId = ref(null);
const changePost = function (id) {
  selectedId.value = id;
};
</script>
