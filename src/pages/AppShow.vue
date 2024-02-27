<script>
import axios from 'axios';
import { store } from '../store';
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      result: [],
      store,
      showModal: false,
      showError: false
    };
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.slug)
      .then((resp) => {
        // this.result = resp.data;
        console.log(resp.data.foods);
        this.result = resp.data.foods;
      })
      .finally(() => {
        console.log(this.result);
        console.log(this.$route.params);
      });
  },
  methods: {

    addtoCart(product) {
      const existingProduct = this.store.cartData.find(
        (item) => item.id == product.id,
        // item.restaurant_id == product.restaurant_id
      );
      const myProduct = {
        id: product.id,
        restaurant_id: product.restaurant_id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };

      if (this.store.cartData[0] && myProduct.restaurant_id !== this.store.cartData[0].restaurant_id) {

        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 1000); // Hide error after 2 seconds

        console.log('non puoi aggiungere cibo da un altro ristorante', this.store.cartData)

      } else if (existingProduct) {
        existingProduct.quantity++;

        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 1000); // Hide modal after 2 seconds

        console.log('hai aggiunto lo stesso prodotto', existingProduct, product, this.store.cartData[0].restaurant_id, myProduct.restaurant_id)

      } else {
        this.store.cartData.push(myProduct);

        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 1000); // Hide modal after 2 seconds

        console.log('è stato aggiunto un nuovo prodotto');
      }

      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
  },
};
</script>
<template>
  <body>
    <router-link class='btn btn-outline-warning' :to='{ name: "home" }'><i class='fa-solid fa-house'></i></router-link>
    <h1 class="text-center p-3">Ristorante {{ this.$route.params.slug }}</h1>
    <div class="d-flex flex-column align-items-center p-3 gap-3">
      <h3 class="text-center fs-1">Menu</h3>
      <div class="fs-2 d-flex flex-column" v-for="items in result">
        <div>
          {{ items.name }} <span>{{ items.price }}€</span>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <img :src="`http://127.0.0.1:8000/storage/${items.cover_image}`" alt="" />
          <button class="w-100" @click="addtoCart(items)">Aggiungi</button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="modal d-flex align-items-center justify-content-center">
        <div v-if="showModal" class="modal-content text-white p-4">
          <p>Prodotto aggiunto al carrello!</p>
        </div>
        <div v-if="showError" class="err-content text-white p-4">
          <p>Non puoi ordinare da un altro ristorante!</p>
        </div>
      </div>
    </transition>

  </body>
</template>
<style lang="scss" scoped>
body {
  background-color: #01222B;

  h1 {
    color: #FDB633;
  }

  h3,
  div {
    color: white;

    div {
      img {
        width: 400px;
      }
    }

    button:hover {
      background-color: #FDB633;
    }
  }
}

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

.err-content {
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.9);
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