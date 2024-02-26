<template>
  <div>
    <h2>Lista Prodotti //debug</h2>
    <ul>
      <li v-for="product in this.store.products" :key="product.id">
        {{ product.name }} - {{ product.price }}€
        <button @click="addToCart(product)" class="btn btn-primary">Aggiungi al carrello</button>
      </li>
    </ul>

    <!-- Confirmation Modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal d-flex align-items-center justify-content-center">
        <div class="modal-content text-white p-4">
          <p>Prodotto aggiunto al carrello!</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      showModal: false
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      let checked = false;
      if (this.store.cartData.length > 0) {
        for (let i = 0; i < this.store.cartData.length; i++) {
          if (this.store.cartData[i].id === product.id && checked === false) {
            this.store.cartData[i].quantity = this.store.cartData[i].quantity + 1;
            checked = true
          } else {
            if (checked === false) {
              this.pushProduct(product);
            }
          }
        }
      }
      else {
        this.pushProduct(product)
      }
      console.log(this.store.cartData);
    },

    pushProduct(product) {
      let myProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      };
      this.store.cartData.push(myProduct)
      // console.log(myProduct);
    }

  },
};
</script>

<style scoped>
/* Styling for the modal */
.modal {
  position: fixed;
  margin-top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .9);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
