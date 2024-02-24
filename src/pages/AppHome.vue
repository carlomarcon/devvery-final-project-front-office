<template>
  <div>
    <AppHeader :cart-data="cartData" />
    <ProductList :products="productsData" @add-to-cart="addToCart" />
    <AppSearch />
    <img src="../img/pittogramma.png" alt="Logo" class="logo" />
    <AppCarousel />
    <AppConcept />
    <AppBody />
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
import ProductList from "../components/ProductList.vue";
import { products } from "/data.js";

export default {
  components: {
    AppHeader,
    ProductList,
    AppSearch,
    AppConcept,
    AppBody,
    AppFooter,
    AppCarousel,
  },
  data() {
    return {
      productsData: products,
      cartData: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cartData.push(product);
    }
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
