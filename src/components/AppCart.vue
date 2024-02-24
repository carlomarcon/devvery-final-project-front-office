<template>
  <div>
    <h2>Carrello</h2>
    <ul v-if="cart.length > 0"> 
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}€ 
        <button @click="removeFromCart(index)">Rimuovi dal carrello</button>
      </li>
    </ul>
    <p v-else>Il carrello è vuoto</p>
    
    <div v-if="cart.length > 0">
      <p>Totale: {{ calculateTotal() }}€</p>
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
