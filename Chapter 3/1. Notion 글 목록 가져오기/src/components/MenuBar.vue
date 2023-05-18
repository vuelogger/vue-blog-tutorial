<template>
  <nav class="menu">
    <a
      v-for="c of categories"
      :key="c"
      :href="'/' + c.toLowerCase()"
      class="category"
      @click.prevent="$emit('click-category', c)"
    >
      {{ c }}</a
    >
  </nav>
</template>

<script setup>
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
