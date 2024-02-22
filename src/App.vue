<script>
import axios from "axios";
import { RouterView } from "vue-router";
export default {
  component: {
    RouterView,
  },
};
</script>
<template>
  <router-view></router-view>
</template>
<style lang="scss">
@use "./styles/general.scss" as *;
@import "@fortawesome/fontawesome-free/css/all.css"; 
</style>
