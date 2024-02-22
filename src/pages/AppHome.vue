<template>
  <div>
    <AppHeader />
    
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>

@use "../styles/variables/variables.scss" as *;


h1 {
  color: $ms_orange;
}
</style>
