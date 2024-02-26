<template>
  <div>
    <AppHeader />
    <div class="ms-container">
      <ProductList @add-to-cart="addToCart" />
      <AppSearch />
      <AppCheckbox />
      <AppResults v-if="store.flag"/>
      <AppCarousel />
      <AppBody />
      <AppOrderAndLogin />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppResults from "../components/AppResults.vue";
import AppSearch from "../components/AppSearch.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
import AppCarousel from "../components/AppCarousel.vue";
import ProductList from "../components/ProductList.vue";
import AppCheckbox from "../components/AppCheckbox.vue";
import { store } from "../store";
import AppOrderAndLogin from "../components/AppOrderAndLogin.vue";

export default {
  components: {
    AppHeader,
    ProductList,
    AppSearch,
    AppBody,
    AppFooter,
    AppCarousel,
    AppCheckbox,
    AppOrderAndLogin,
    AppResults
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
