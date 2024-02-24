<template>
    <div>
        <h2>Lista Prodotti</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - {{ product.price }}€
                <button @click="addToCart(product)">Aggiungi al carrello</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    methods: {
        addToCart(product) {
            // Emetti un evento per notificare che un prodotto è stato aggiunto al carrello
            this.$emit('add-to-cart', product);
            console.log(product);
        }
    }
};
</script>
  
<style scoped></style>
  