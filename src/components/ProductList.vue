<template>
  <div>
    <h2>Lista Prodotti</h2>
    <ul>
      <li v-for="product in store.products" :key="product.id">
        {{ product.name }} - {{ product.price }}€
        <button @click="addToCart(product)">Aggiungi al carrello</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.store.cartData.push(product);
    },
  },
};
</script>

<style scoped></style>
