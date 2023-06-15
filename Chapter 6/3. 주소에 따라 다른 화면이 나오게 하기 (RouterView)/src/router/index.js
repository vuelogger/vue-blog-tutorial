import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostContent from "../views/PostContent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/category/html",
      component: PostList,
    },
    {
      path: "/category/css",
      component: PostList,
    },
    {
      path: "/category/javascript",
      component: PostList,
    },
    {
      path: "/post/1",
      component: PostContent,
    },
    {
      path: "/post/2",
      component: PostContent,
    },
    {
      path: "/post/3",
      component: PostContent,
    },
  ],
});

export default router;
