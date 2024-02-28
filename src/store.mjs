function getCart() {
  if (typeof localStorage !== 'undefined') {
    return JSON.parse(localStorage.getItem('cartData')) || [];
  } else {
    // Fallback per l'ambiente server (Node.js)
    // Qui puoi utilizzare un'altra forma di memorizzazione dei dati, ad esempio un database
    return [];
  }
}

export const store = {
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

 


};


