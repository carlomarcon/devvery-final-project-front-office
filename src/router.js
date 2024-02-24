import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import PrivacyPage from './pages/PrivacyPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: PrivacyPage
    },
  ],
});

export { router };
