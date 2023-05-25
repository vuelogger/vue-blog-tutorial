<template>
  <div class="nav">
    <button
      v-for="c of category"
      @click="click(c)"
      :class="{ active: selected == c }"
      :key="c"
    >
      {{ c }}
    </button>
  </div>
</template>

<script setup>
const category = ["HTML", "CSS", "Javascript", "Vue", "React"];

const { selected } = defineProps(["selected"]);

const emit = defineEmits(["categorySelect"]);
const click = function (c) {
  emit("categorySelect", c);
};
</script>

<style scoped>
.nav {
  display: flex;
  background-color: #363636;
  border-radius: 5px;
  padding: 6px 10px;
}

.total {
  color: white;
  margin-left: auto;
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
