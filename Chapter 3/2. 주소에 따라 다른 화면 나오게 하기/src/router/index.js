import { createRouter, createWebHistory } from "vue-router";

// 컴포넌트 가져오기
import ListView from "../views/ListView.vue";
import ContentView from "../views/ContentView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", // http://localhost:5173/
      redirect: "/list",
    },
    {
      path: "/list", // http://localhost:5173/list
      component: ListView,
    },
    {
      path: "/content", // http://localhost:5173/content
      component: ContentView,
    },
  ],
});

export default router;
