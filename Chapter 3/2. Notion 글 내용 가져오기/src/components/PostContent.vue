<template>
  <main class="post-content">
    <NotionRenderer :blockMap="blockMap" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

const props = defineProps(["id"]);

const blockMap = ref(null);
getPageBlocks(props.id).then((b) => {
  blockMap.value = b;
});
</script>

<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>
