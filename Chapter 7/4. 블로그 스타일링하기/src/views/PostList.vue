<template>
  <main class="post-list">
    <h2 class="category" v-show="!search">
      카테고리 : {{ selectedCategory.toUpperCase() }}
    </h2>

    <ul>
      <li v-for="item in filteredList" :key="item.id">
        <RouterLink class="post" :to="'/post/' + item.id">
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.Date }}</div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { getPageTable } from "vue-notion";

const route = useRoute();

const selectedCategory = computed(() => route.params.category);

const props = defineProps(["search"]);

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
  if (props.search == "") {
    for (const category in postList.value) {
      if (category.toLowerCase() == selectedCategory.value) {
        return postList.value[category];
      }
    }
  } else {
    const result = [];
    for (const category in postList.value) {
      for (const item of postList.value[category]) {
        if (item.title.includes(props.search)) {
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

<style scoped>
.category {
  color: #222;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
}

.post-list ul {
  list-style-type: none;
  padding: 0;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}

.post-list li {
  padding: 5px 10px;
}

.post {
  display: flex;
  color: #222;
  text-decoration: none;
  transition: all 0.3s;
}

.post:hover {
  color: rgb(96, 128, 225);
  font-size: 1.1em;
}

.date {
  margin-left: auto;
}
</style>
