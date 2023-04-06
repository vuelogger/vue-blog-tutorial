import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  template: `
    <nav class="menu">
      <a 
        v-for="c of categories"
        :key="c"
        :href="'/' + c.toLowerCase()" 
        class="category"
        @click.prevent="clickCategory(c)"
      > {{ c }}</a>
    </nav>
  `,
  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    const selectedCategory = ref("HTML");
    const clickCategory = function (category) {
      selectedCategory.value = category;
    };
    return {
      categories,
      selectedCategory,
      clickCategory,
    };
  },
};
