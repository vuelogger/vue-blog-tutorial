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
    <main class="post-list">
      <h2>카테고리 : {{ selectedCategory }}</h2> 
    </main>
	`,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    let selectedCategory = "HTML";
    const clickCategory = function (category) {
      selectedCategory = category;
    };
    return {
      categories,
      selectedCategory,
      clickCategory,
    };
  },
};
