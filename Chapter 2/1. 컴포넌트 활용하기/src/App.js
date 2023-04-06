import MenuBar from "./components/MenuBar.js";
import PostList from "./components/PostList.js";

export default {
  template: `
    <MenuBar />
    <PostList />
	`,
  components: {
    MenuBar,
    PostList,
  },
};
