import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
<<<<<<< HEAD
import AppShipment from "./pages/AppShipment.vue";
=======
import PrivacyPage from './pages/PrivacyPage.vue'
>>>>>>> 51353ebf50538f415ab6c379b9cbb69a0e8a0983

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
<<<<<<< HEAD
      path: "/shipment",
      name: "shipment",
      component: AppShipment,
    },
=======
          path: '/privacy',
          name: 'Privacy',
          component: PrivacyPage
        },
>>>>>>> 51353ebf50538f415ab6c379b9cbb69a0e8a0983
  ],
});

export { router };
