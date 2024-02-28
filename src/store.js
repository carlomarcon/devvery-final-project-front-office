import { reactive } from "vue";

export const store = reactive({
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