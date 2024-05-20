import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/view/LoginView.vue";
import DesktopView from "@/view/DesktopView.vue";
import ClientesView from "@/view/ClientesView.vue";
import InmueblesView from "@/view/InmueblesView.vue";
import RegistrarClienteview from "@/view/RegistrarClienteView.vue"

const routes = [
  {
    path: "/",
    name: "Inmuebles",
    component: InmueblesView,
  },
  {
    path: "/Inmuebles",
    name: "Inmuebles",
    component: InmueblesView,
  },
  {
    path: "/Desktop",
    name: "Desktop",
    component: DesktopView,
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: ClientesView,
  },
  {
    path: "/RegistrarCliente",
    name: "RegistrarCliente",
    component: RegistrarClienteview,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;