import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostContent from "../views/PostContent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/category/html",
    },
    {
      path: "/category/:category",
      component: PostList,
    },
    {
      path: "/post/:id",
      component: PostContent,
    },
  ],
});

export default router;
