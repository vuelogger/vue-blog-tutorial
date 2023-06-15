<template>
  <nav class="menu">
    <RouterLink
      v-for="c of categories"
      :key="c"
      :to="'/category/' + c.toLowerCase()"
      class="category"
    >
      {{ c }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
const categories = ["HTML", "CSS", "Javascript"];
</script>

<style scoped>
.menu {
  background-color: #444;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 5px;
}

.category {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

.category:hover {
  color: rgb(135, 225, 255);
}

.category.disabled {
  pointer-events: none;
}
</style>
