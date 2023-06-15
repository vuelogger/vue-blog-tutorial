<template>
  <main class="post-content">
    <NotionRenderer :blockMap="blockMap" />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

const route = useRoute();

const id = computed(() => route.params.id);
const blockMap = ref(null);

blockMap.value = null;
getPageBlocks(id.value).then((b) => {
  blockMap.value = b;
});
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
