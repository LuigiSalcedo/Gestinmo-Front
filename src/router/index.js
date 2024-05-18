import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/view/LoginView.vue";
// lazy-loaded

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;