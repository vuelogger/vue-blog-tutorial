<template>
  <input class="search" v-model="search" />
  <main class="post-list">
    <h2 class="category" v-show="!search">카테고리 : {{ selectedCategory }}</h2>
    <ul>
      <li v-for="item in filteredList" :key="item.id">
        <button class="post" @click="$emit('click-post', item.id)">
          {{ item.title }}
        </button>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getPageTable } from "vue-notion";

const search = ref("");

const props = defineProps(["selectedCategory"]);
const postList = ref({});
getPageTable("088ad41f4b9f4293aa11a4670359f085").then((data) => {
  const result = {};
  for (const post of data) {
    const c = post.category;
    if (!result[c]) {
      result[c] = [];
    }

    result[c].push(post);
  }
  postList.value = result;
});

const filteredList = computed(() => {
  if (search.value == "") {
    return postList.value[props.selectedCategory];
  } else {
    const result = [];
    for (const category in postList.value) {
      for (const item of postList.value[category]) {
        if (item.title.includes(search.value)) {
          result.push(item);
        }
      }
    }
    return result;
  }
});

onMounted(() => {
  document.querySelector(".search").focus();
});
</script>

<style>
.search {
  margin-top: 10px;
  padding: 5px 3px;
  border-radius: 5px;
  border: 1px solid #777;
}

.post-list button {
  border: 0;
  background-color: transparent;
  color: rgb(101, 129, 139);
  cursor: pointer;
}

.post-list button:hover {
  color: blue;
}
</style>
