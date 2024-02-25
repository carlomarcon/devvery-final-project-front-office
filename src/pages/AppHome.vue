<template>
  <div>
    <AppHeader :cart-data="cartData" />
    <!-- <ProductList @add-to-cart="addToCart" /> -->
    <AppSearch />
    <img src="../img/pittogramma.png" alt="Logo" class="logo" />
    <AppCarousel />
    <AppConcept />
    <AppWave />
    <AppBody />
    <AppOrderAndLogin />
    <AppWave class="rotate" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppWave from "../components/AppWave.vue";
// import ProductList from "../components/ProductList.vue";
import { store } from "../store";
import AppOrderAndLogin from "../components/AppOrderAndLogin.vue";

export default {
  components: {
    AppHeader,
    // ProductList,
    AppWave,
    AppSearch,
    AppConcept,
    AppBody,
    AppFooter,
    AppCarousel,
    AppOrderAndLogin,
  },
  data() {
    return {
      store,
      // cartData: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cartData.push(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.rotate {
  transform: rotate(180deg);
  position: relative;
  background-color: black;
}
.logo {
  width: 50%;
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
