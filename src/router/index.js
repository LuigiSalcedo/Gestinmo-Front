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
import RegistarAsesorView from "@/view/Registrar/RegistrarAsesorView.vue"

const routes = [
  {
    path: "/",
    name: "Inmuebles",
    component: InmueblesView,
    meta: { requiresAuth: true } 
  },
  {
    path: "/Inmuebles",
    name: "Inmuebles",
    component: InmueblesView,
    meta: { requiresAuth: true } 
  },
  {
    path: "/RegistrarAsesor",
    name: "RegistrarAsesor",
    component: RegistarAsesorView,
  },
  {
    path: "/Desktop",
    name: "Desktop",
    component: DesktopView,
    meta: { requiresAuth: true } 
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
    meta: { requiresAuth: true } 
  },
  {
    path: "/RegistrarCliente",
    name: "RegistrarCliente",
    component: RegistrarClienteView,
    meta: { requiresAuth: true } 
  },
  {
    path: "/RegistrarInmueble",
    name: "RegistrarInmueble",
    component: RegistrarInmuebleView,
    meta: { requiresAuth: true } 
  },
  {
    path: "/Ofertas",
    name: "Ofertas",
    component: OfertasView,
    meta: { requiresAuth: true } 
  },
  {
    path: "/Clientes/:clienteId",
    name: "DetallesCliente",
    component: DetallesCliente,
    meta: { requiresAuth: true } 
  },
  {
    path: "/Inmuebles/:inmuebleId",
    name: "DetallesInmueble",
    component: DetallesInmueble,
    meta: { requiresAuth: true } 
  },
  {
    path: "/Ofertas/:Oferta",
    name: "DetallesOferta",
    component: DetallesOferta,
    meta: { requiresAuth: true } 
  },
  {
    path: "/RegistrarOferta",
    name: "RegistrarOferta",
    component: RegistrarOfertaView,
    meta: { requiresAuth: true } 
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('authToken'); // O cualquier lógica de autenticación que uses

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;