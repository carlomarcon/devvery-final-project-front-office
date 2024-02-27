import { reactive } from "vue";

export const store = reactive({
  total: 0,
  flag: false,
  restaurants: [],
  myTypes: [],
  search: "",

  products: [
    { id: 1, name: "riso", price: 10 },
    { id: 2, name: "sushi", price: 20 },
    { id: 3, name: "arancina", price: 30 },
  ],
  cartData: getCart(),
});

function getCart() {
  return JSON.parse(localStorage.getItem('cartData')) || [];
};