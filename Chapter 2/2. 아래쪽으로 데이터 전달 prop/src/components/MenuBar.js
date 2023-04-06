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
    const clickCategory = function (category) {
      selectedCategory.value = category;
    };
    return {
      categories,
      clickCategory,
    };
  },
};
