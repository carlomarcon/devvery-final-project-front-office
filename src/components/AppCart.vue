<template>
  <div>
    <h2 class="mb-4">Carrello</h2>
    <ul v-if="cart.length > 0" class="list-group"> 
      <li v-for="(item, index) in cart" :key="index" class="list-group-item">
        {{ item.name }} - {{ item.price }}€ 
        <button @click="removeFromCart(index)" class="btn btn-danger btn-sm float-end">Rimuovi dal carrello</button>
      </li>
    </ul>
    <p v-else class="alert alert-info">Il carrello è vuoto</p>
    
    <div v-if="cart.length > 0" class="mt-4">
      <p class="fw-bold">Totale: {{ calculateTotal() }}€</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeFromCart(index) {
      // Rimuove l'elemento dal carrello utilizzando l'indice
      this.$emit('remove-from-cart', index);
    },
    calculateTotal() {
      // Calcola il totale del carrello sommando solo i prezzi degli elementi
      let total = 0;
      for (let item of this.cart) {
        total += item.price;
      }
      return total;
    }
  }
};
</script>

<style scoped>
/* Stili specifici al componente */
</style>
