<template>
  <img class="logo" src="./assets/logo.png" />
  <Category />
</template>

<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
};
</script>

<style>
.logo {
  height: 100px;
  display: block;
  margin: 30px auto;
}
</style>
