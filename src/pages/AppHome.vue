<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppCart from "../components/AppCart.vue";
export default {
  components: {
    AppHeader,
    AppCart,
    AppSearch,
    AppConcept,
    AppBody,
    AppFooter,
    AppCarousel,
  },
};
</script>
<template>
  <AppHeader />
  <AppCart />
  <AppSearch />
  <img src="../img/pittogramma.png" alt="Logo" class="logo" />
  <AppCarousel />
  <AppConcept />
  <AppBody />
  <AppFooter />
</template>
<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
.logo {
  width: 50%;
  /* position: relative; */
  position: relative;
  left: 55%;
  transform: translateX(-55%);
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .logo {
    display: none;
  }
}
</style>
