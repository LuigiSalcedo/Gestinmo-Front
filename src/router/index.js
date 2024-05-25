import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/view/LoginView.vue";
import DesktopView from "@/view/vistasPrincipales/DesktopView.vue";
import ClientesView from "@/view/vistasPrincipales/ClientesView.vue";
import InmueblesView from "@/view/vistasPrincipales/InmueblesView.vue";
import RegistrarClienteView from "@/view/Registrar/RegistrarClienteView.vue";
import RegistrarInmuebleView from "@/view/Registrar/RegistrarInmuebleView.vue";
import DetallesCliente from  "@/view/Detalles/DetallesCliente.vue"
import DetallesInmueble from "@/view/Detalles/DetallesInmueble.vue";
import OfertasView from "@/view/vistasPrincipales/OfertasView.vue";
import DetallesOferta from "@/view/Detalles/DetallesOferta.vue";
import RegistrarOfertaView from "@/view/Registrar/RegistrarOfertaView.vue";

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
    component: RegistrarClienteView,
  },
  {
    path: "/RegistrarInmueble",
    name: "RegistrarInmueble",
    component: RegistrarInmuebleView,
  },
  {
    path: "/Ofertas",
    name: "Ofertas",
    component: OfertasView,
  },
  {
    path: "/Clientes/:clienteId",
    name: "DetallesCliente",
    component: DetallesCliente,
  },
  {
    path: "/Inmuebles/:inmuebleId",
    name: "DetallesInmueble",
    component: DetallesInmueble,
  },
  {
    path: "/Ofertas/:Oferta",
    name: "DetallesOferta",
    component: DetallesOferta,
  },
  {
    path: "/RegistrarOferta",
    name: "RegistrarOferta",
    component: RegistrarOfertaView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;