<script>
import AppHeader from "../components/AppHeader.vue";

export default { components: { AppHeader } };
</script>
<template>
  <AppHeader />
</template>
<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
h1 {
  color: $ms_orange;
}
</style>
