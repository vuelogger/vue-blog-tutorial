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
    <main class="post-list">
      <h2>카테고리 : {{ selectedCategory }}</h2> 
      <ul>
        <li v-for="item in postList[selectedCategory]" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </main>
	`,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    const selectedCategory = ref("HTML");
    const clickCategory = function (category) {
      selectedCategory.value = category;
    };

    const postList = {
      HTML: [
        { id: 0, title: "HTML 기본 1" },
        { id: 1, title: "HTML 기본 2" },
      ],
      CSS: [{ id: 2, title: "CSS 기본 1" }],
    };

    return {
      categories,
      selectedCategory,
      clickCategory,
      postList,
    };
  },
};
