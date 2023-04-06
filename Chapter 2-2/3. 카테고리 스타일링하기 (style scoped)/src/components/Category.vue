<template>
  <ul class="nav">
    <button
      v-for="c of category"
      @click="select(c)"
      :class="{ active: selected == c }"
      :key="c"
    >
      {{ c }}
    </button>
  </ul>
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

<style scoped>
.nav {
  background-color: #363636;
  border-radius: 5px;
  padding: 6px 10px;
}

button {
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
}

button:hover {
  color: gray;
}

button.active {
  color: aquamarine;
}
</style>
