import { reactive } from "vue";

export const store = reactive({
  products: [
    { id: 1, name: "Prodotto 1", price: 10, quantity: 1 },
    { id: 2, name: "Prodotto 2", price: 20, quantity: 1 },
    { id: 3, name: "Prodotto 3", price: 30, quantity: 1 },
  ],
  cartData: [],
});
