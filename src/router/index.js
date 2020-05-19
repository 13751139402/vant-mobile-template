import Vue from "vue";
import VueRouter from "vue-router";
import homne from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "homne",
    component: homne
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@views/message")
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("@views/shopping")
  },
  {
    path: "/me",
    name: "me",
    component: () => import("@views/me")
  }
];

const router = new VueRouter({
  routes
});

export default router;
