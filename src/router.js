import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import PrivacyPage from "./pages/PrivacyPage.vue";
import AppShipment from "./pages/AppShipment.vue";
import AppShow from "./pages/AppShow.vue";
import PaymentComponent from "./pages/PaymentComponent.vue";
import TermAndConditionPage from "./pages/TermAndConditionPage.vue";


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
      name: "Shipment",
      component: AppShipment,
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: PrivacyPage,
    },
    {
      path: "/show/:slug",
      name: "show",
      component: AppShow,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentComponent,
    },
    {
      path: "/term",
      name: "term",
      component: TermAndConditionPage,
    },
  ],
});

export { router };
