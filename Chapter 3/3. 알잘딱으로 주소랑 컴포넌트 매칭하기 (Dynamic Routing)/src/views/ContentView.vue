<template>
  <h1>{{ content[$route.params.id].title }}</h1>
  <p>{{ content[$route.params.id].content }}</p>
</template>

<script setup>
const content = {
  1: { title: "HTML 기본 1", content: "쏼라쏼라 1" },
  2: { title: "HTML 기본 2", content: "쏼라쏼라 2" },
  3: { title: "HTML 기본 3", content: "쏼라쏼라 3" },
  4: { title: "CSS 기본 1", content: "오부오부 1" },
  5: { title: "CSS 기본 2", content: "오부오부 2" },
  6: { title: "CSS 기본 3", content: "오부오부 3" },
  7: { title: "Javascript 기본 1", content: "이러쿵저러쿵 1" },
  8: { title: "Javascript 기본 2", content: "이러쿵저러쿵 2" },
  9: { title: "Javascript 기본 3", content: "이러쿵저러쿵 3" },
  10: { title: "Vue 기본 1", content: "쀼쀼" },
  11: { title: "React 기본 2", content: "뤼액뤼액" },
};
</script>
