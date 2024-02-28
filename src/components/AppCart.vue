<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    remove(id) {
      this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    add(id) {
      const product = this.store.cartData.find(item => item.id == id);
      product.quantity = product.quantity + 1;
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    decrease(id) {
      const product = this.store.cartData.find(item => item.id == id);
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
      } else {
        this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      }
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    calculateTotal() {
      let total = 0;
      this.store.cartData.forEach(element => {
        const productPrice = element.price * element.quantity;
        total += productPrice;
      });
      this.store.total = total;
      localStorage.setItem('total', JSON.stringify(this.store.total));
      return total;
    }
  },
};
</script> 

<template>
  <div>
    <ul v-if="store.cartData.length > 0" class="list-group">
      <li v-for="(item, index) in store.cartData" :key="index" class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
          <div class="info">
            <span class="d-inline-block mb-1 text-capitalize">{{ item.name }}</span> - <span>{{ item.price }}€</span><br>

            <button class="px-2 py-1 bg-warning-subtle border-0 rounded-circle lh-1 fw-bold"
              @click="decrease(item.id)">-</button>
            <span class="d-inline-block mx-2">{{ item.quantity }}</span>
            <button class="px-2 py-1 bg-warning-subtle border-0 rounded-circle lh-1 fw-bold"
              @click="add(item.id)">+</button>
          </div>

          <button class="btn btn-outline-danger btn-sm" @click="remove(item.id)">
            Rimuovi dal carrello
          </button>
        </div>
      </li>
    </ul>
    <p v-else class="alert alert-light">Il carrello è vuoto</p>

    <div v-if="store.cartData.length > 0" class="mt-4">
      <p class="fw-bold">Totale: {{ calculateTotal() }}€</p>
      <router-link v-if="store.cartData.length > 0" to="/shipment" class="btn btn-outline-success">Vai alla
        spedizione</router-link>
    </div>
  </div>
</template>

<style scoped></style>
