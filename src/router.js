import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppShipment from "./pages/AppShipment.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/shipment",
      name: "shipment",
      component: AppShipment,
    },
  ],
});

export { router };
