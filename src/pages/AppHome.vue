<template>
  <div>
    <AppHeader :cart-data="cartData" />
    <div class="ms-container">
      <ProductList @add-to-cart="addToCart" />
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

  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
import AppCarousel from "../components/AppCarousel.vue";
import ProductList from "../components/ProductList.vue";
import AppWave from "../components/AppWave.vue";
import { store } from "../store";
import AppOrderAndLogin from "../components/AppOrderAndLogin.vue";

export default {
  components: {
    AppHeader,
    ProductList,
    AppSearch,
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
  background-color: #01222b;
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

<<<<<<< HEAD
@media (min-width: 2560px) {
  .rotate {
    display: none;
  }
=======
.ms-container {
  padding-top: 5rem;
>>>>>>> 303f933e5977351ff68c0a406f2a737f00df5e74
}
</style>
