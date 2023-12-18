import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    redirect: "/resource",
    component: () => import("@/layout/default.vue"),
    children: [
      {
        path: "/resource",
        name: "resource",
        component: () => import("@/views/resouces/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
