<template>
    <div>
      <h2>Carrello</h2>
      <ul v-if="cart.length > 0"> 
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - {{ item.price }}€ - Quantità: {{ item.quantity }}
        </li>
      </ul>
      <p v-else>Il carrello è vuoto</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Stili specifici al componente */
  </style>
  