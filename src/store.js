import { reactive } from "vue";

export const store = reactive({
  baseUrl: 'http://127.0.0.1:8000',
  total: 0,
  flag: false,
  restaurants: [],
  myTypes: [],
  search: "",
  selectRestaurant: '',
  cartData: getCart(),
});

function getCart() {
  return JSON.parse(localStorage.getItem('cartData')) || [];
};