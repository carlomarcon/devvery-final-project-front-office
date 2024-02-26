<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    uniqueCartItems() {
      const uniqueItems = [];
      for (const item of this.store.cartData) {
        const existingItemIndex = uniqueItems.findIndex(
          (uniqueItem) => uniqueItem.name === item.name
        );
        if (existingItemIndex !== -1) {
          uniqueItems[existingItemIndex].quantity += item.quantity;
        } else {
          uniqueItems.push({ ...item });
        }
      }
      return uniqueItems;
    },
  },
  methods: {
    remove(index) {
      this.store.cartData.splice(index, 1);
    },
    calculateTotal() {
      let total = 0;
      for (const item of this.store.cartData) {
        total += item.price * item.quantity;
      }
      return total;
    },
    incrementQuantity(index) {
      const clonedItem = { ...this.store.cartData[index] };
      clonedItem.quantity++;
      this.store.cartData.splice(index, 1, clonedItem);
    },
    decrementQuantity(index) {
      if (this.store.cartData[index].quantity > 1) {
        const clonedItem = { ...this.store.cartData[index] };
        clonedItem.quantity--;
        this.store.cartData.splice(index, 1, clonedItem);
      }
    },
  },
};
</script>




<template>
  <div>
    <ul v-if="store.cartData.length > 0" class="list-group">
      <li v-for="(item, index) in uniqueCartItems" :key="index" class="list-group-item">
        <h5 class="d-flex justify-content-between ">
          <div>{{ item.name }} </div>
          <div>{{ item.price }}€</div>

        </h5>

        <div class="d-flex justify-content-between mt-2">
          <div class="d-flex">
            <button class="btn btn-warning " @click="decrementQuantity(index)">
              <i class="fa-solid fa-minus"></i>
            </button>
            <div class="quantity d-flex">{{ item.quantity }}</div>
            <button class="btn btn-warning " @click="incrementQuantity(index)">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <button class="btn btn-danger " @click="remove(index)">
            <i class="fa-solid fa-trash"></i>
          </button>

        </div>

      </li>
    </ul>
    <p v-else class="alert alert-info">Il carrello è vuoto</p>

    <div v-if="store.cartData.length > 0" class="mt-4">
      <p class="fw-bold">Totale: {{ calculateTotal() }}€</p>
      <router-link v-if="store.cartData.length > 0" to="/shipment" class="btn btn-primary">Procedi
        all'ordine</router-link>
    </div>
  </div>
</template>




<style scoped>
.quantity {
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0 3px 0;
  border: 1px solid black;
}

button {
  border-radius: 50%;
}
</style>
