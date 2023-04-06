export default {
  template: `
    <nav class="menu">
      <a 
        v-for="c of categories"
        :key="c"
        :href="'/' + c.toLowerCase()" 
        class="category"
        @click.prevent="changeCategory(c)"
      > {{ c }}</a>
    </nav>
	`,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    const changeCategory = function (category) {
      console.log("Category: ", category);
    };
    return {
      categories,
      changeCategory,
    };
  },
};
