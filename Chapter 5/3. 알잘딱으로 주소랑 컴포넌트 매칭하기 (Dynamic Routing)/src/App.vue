<template>
  <img class="logo" src="./assets/logo.png" />
  <Category :selected="selected" @category-select="categorySelect" />
  <router-view></router-view>
</template>

<script setup>
import Category from "./components/Category.vue";
import { ref } from "vue";

const selected = ref("HTML");
const categorySelect = function (category) {
  selected.value = category;
};
</script>

<style>
.logo {
  height: 100px;
  display: block;
  margin: 30px auto;
}
</style>
