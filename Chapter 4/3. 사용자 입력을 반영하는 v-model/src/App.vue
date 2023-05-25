<template>
  <MenuBar @click-category="changeCategory" />
  <PostList
    v-if="main == 'list'"
    @click-post="changePost"
    :selected-category="selectedCategory"
  />
  <PostContent v-else-if="main == 'content'" :id="selectedId" />
</template>

<script setup>
import { ref } from "vue";
import MenuBar from "./components/MenuBar.vue";
import PostList from "./components/PostList.vue";
import PostContent from "./components/PostContent.vue";

const main = ref("list");

const selectedCategory = ref("HTML");
const changeCategory = function (category) {
  selectedCategory.value = category;
  main.value = "list";
};

const selectedId = ref(null);
const changePost = function (id) {
  selectedId.value = id;
  main.value = "content";
};
</script>
