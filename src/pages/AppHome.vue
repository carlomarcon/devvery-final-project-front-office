<script>
import AppHeader from "../components/AppHeader.vue";
import AppSearch from "../components/AppSearch.vue";
import AppConcept from "../components/AppConcept.vue";
import AppFooter from "../components/AppFooter.vue";
import AppBody from "../components/AppBody.vue";
import AppCarousel from "../components/AppCarousel.vue";
import ProductList from "../components/ProductList.vue";
import AppCart from "../components/AppCart.vue";
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
    AppCart,
  },
  data() {
    return {
      productsData: products,
      cartData: []
    };
  },
  methods: {
    addToCart(product) {
      // Aggiungi il prodotto al carrello
      this.cartData.push(product);
      
    }
  }


};
</script>

<template>
  <div>
    <AppHeader />
    <ProductList :products="productsData"/>
    <AppSearch />
    <img src="../img/pittogramma.png" alt="Logo" class="logo" />
    <AppCarousel />
    <AppConcept />
    <AppBody />
    <AppFooter />  
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
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
