<template>
  <img class="logo" src="./assets/logo.png" />
  <Category :selected="selected" @category-select="categorySelect" />
  <List :selected="selected" />
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script setup>
import List from "./components/List.vue";
import Category from "./components/Category.vue";
import { onMounted, ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

const selected = ref("HTML");
const categorySelect = function (category) {
  selected.value = category;
};
const blockMap = ref(null);
getPageBlocks("8c1ab01960b049f6a282dda64a94afc7").then((data) => {
  blockMap.value = data;
});
</script>

<style>
@import "vue-notion/src/styles.css";
.logo {
  height: 100px;
  display: block;
  margin: 30px auto;
}
</style>
