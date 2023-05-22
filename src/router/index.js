import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "types",
    component: () => import("../views/types-of-floors.vue"),
  },
  {
    path: "/floors/:id",
    name: "floors",
    component: () => import("../views/floors-of-type.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
