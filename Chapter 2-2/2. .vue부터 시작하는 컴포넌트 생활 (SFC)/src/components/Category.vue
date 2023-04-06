<template>
  <button
    v-for="c of category"
    @click="select(c)"
    :class="{ active: selected == c }"
    :key="c"
  >
    {{ c }}
  </button>
  <p>{{ selected }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const selected = ref("HTML");
    return {
      category: ["HTML", "CSS", "Javascript", "Vue", "React"],
      selected,
      select: (category) => (selected.value = category),
    };
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
