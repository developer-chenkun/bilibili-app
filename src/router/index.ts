import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/indexView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/video/:id",
    component: () => import("@/views/video/indexView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
