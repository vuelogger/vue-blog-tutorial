<template>
  <main class="post-content">
    <NotionRenderer :blockMap="blockMap" fullPage :mapImageUrl="mapImageUrl" />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onUpdated } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const route = useRoute();

const id = computed(() => route.params.id);
const blockMap = ref(null);

const mapImageUrl = function (url, block) {
  try {
    const val = block.value;
    const fileName = val.format.page_cover.split("/").pop();
    const fileId = val.file_ids.pop();
    const id = val.id;
    const spaceId = val.space_id;
    const userId = val.created_by_id;
    return `https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F${fileId}%2F${fileName}?table=block&id=${id}&spaceId=${spaceId}&userId=${userId}&cache=v2`;
  } catch {
    return url;
  }
};

blockMap.value = null;
getPageBlocks(id.value).then((b) => {
  blockMap.value = b;
  console.log(id.value, b);
  console.log(b[id.value]);
});

onUpdated(() => {
  Prism.highlightAll();
});
</script>

<style>
@import "vue-notion/src/styles.css";

.post-content {
  margin-top: 10px;
}

.notion-page-cover {
  border-radius: 10px;
}

.notion-h2 {
  border-left: 10px solid #bdc4ff;
  padding-left: 20px;
  margin-bottom: 5px;
}
</style>
