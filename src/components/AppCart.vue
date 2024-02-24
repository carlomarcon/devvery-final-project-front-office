<template>
  <div>
    <h2 class="mb-4">Carrello</h2>
    <ul v-if="store.cartData.length > 0" class="list-group">
      <li
        v-for="(item, index) in this.store.cartData"
        :key="index"
        class="list-group-item"
      >
        {{ item.name }} - {{ item.price }}€
        <button class="btn btn-danger btn-sm float-end" @click="remove(index)">
          Rimuovi dal carrello
        </button>
      </li>
    </ul>
    <p v-else class="alert alert-info">Il carrello è vuoto</p>

    <div v-if="store.cartData.length > 0" class="mt-4">
      <p class="fw-bold">Totale: {{ calculateTotal() }}€</p>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    remove(index) {
      this.store.cartData.splice(index, 1);
    },
    calculateTotal() {
      // Calcola il totale del carrello sommando solo i prezzi degli elementi
      let total = 0;
      for (let item of this.store.cartData) {
        total += item.price;
      }
      return total;
    },
  },
};
</script>

<style scoped>
/* Stili specifici al componente */
</style>
