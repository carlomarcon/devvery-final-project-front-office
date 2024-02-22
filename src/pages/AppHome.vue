<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
export default {
  components: { AppHeader, AppSearch, AppConcept, AppBody, AppFooter },
};
</script>
<template>
  <AppHeader />
  <AppSearch />
  <img src="../img/pittogramma.png" alt="Logo" class="logo" />
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
</style>
