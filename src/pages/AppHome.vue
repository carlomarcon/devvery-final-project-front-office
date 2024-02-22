<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";

export default { components: { AppHeader, AppSearch,AppConcept } };
</script>
<template>
  <AppHeader />
  <AppSearch />
  <img src="../img/pittogramma.png" alt="Logo" class="logo" />
  <AppConcept />
</template>
<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
.logo {
  width: 50%;
  /* position: relative; */
  position: relative;
  left: 55%;
  transform: translateX(-50%);
  margin-top: 2rem;
}
</style>
