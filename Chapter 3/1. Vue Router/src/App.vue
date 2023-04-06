<template>
  <img class="logo" src="./assets/logo.png" />
  <Category :selected="selected" @category-select="categorySelect" />
  <List v-if="title == null" :selected="selected" @post-select="postSelect" />
  <Content v-if="title != null" :title="title" />
</template>

<script setup>
import List from "./components/List.vue";
import Category from "./components/Category.vue";
import Content from "./components/Content.vue";
import { ref } from "vue";

const title = ref(null);

const selected = ref("HTML");
const categorySelect = function (category) {
  selected.value = category;
  title.value = null;
};

const postSelect = function (postTitle) {
  title.value = postTitle;
};
</script>

<style>
.logo {
  height: 100px;
  display: block;
  margin: 30px auto;
}
</style>
