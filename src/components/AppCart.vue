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
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    calculateTotal() {

      let total = 0;
      for (let item of this.store.cartData) {
        total += item.price;
      }
      return total;
    },
  },
};
</script> 

<template>
  <div>
    <ul v-if="store.cartData.length > 0" class="list-group">
      <li v-for="(item, index) in store.cartData" :key="index" class="list-group-item">
        {{ item.name }} - {{ item.price }}€ {{ item.quantity }}
        <button class="btn btn-danger btn-sm float-end" @click="remove(index)">
          Rimuovi dal carrello
        </button>
      </li>
    </ul>
    <p v-else class="alert alert-info">Il carrello è vuoto</p>

    <div v-if="store.cartData.length > 0" class="mt-4">
      <p class="fw-bold">Totale: {{ calculateTotal() }}€</p>
      <router-link v-if="store.cartData.length > 0" to="/shipment" class="btn btn-primary">Vai alla
        spedizione</router-link>
    </div>
  </div>
</template>

<style scoped></style>
