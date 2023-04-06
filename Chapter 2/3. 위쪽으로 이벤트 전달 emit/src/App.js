import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import MenuBar from "./components/MenuBar.js";
import PostList from "./components/PostList.js";

export default {
  template: `
    <MenuBar @click-category="changeCategory" />
    <PostList :selected-category="selectedCategory" />
	`,
  setup() {
    const selectedCategory = ref("HTML");
    const changeCategory = function (category) {
      selectedCategory.value = category;
    };

    return {
      selectedCategory,
      changeCategory,
    };
  },
  components: {
    MenuBar,
    PostList,
  },
};
