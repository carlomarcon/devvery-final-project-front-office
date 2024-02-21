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
</style>
