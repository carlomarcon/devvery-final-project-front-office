<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    closeCanvas() {
      const canvas = document.querySelector('.offcanvas-backdrop');
      canvas.style.display = 'none';
    },
    remove(id) {
      this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    add(id) {
      const product = this.store.cartData.find(item => item.id == id);
      product.quantity = product.quantity + 1;
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    decrease(id) {
      const product = this.store.cartData.find(item => item.id == id);
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
      } else {
        this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      }
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    calculateTotal() {
      let total = 0;
      this.store.cartData.forEach(element => {
        const productPrice = element.price * element.quantity;
        total += productPrice;
      });
      this.store.total = total;
      localStorage.setItem('total', JSON.stringify(this.store.total));
      return total;
    },
    emptyCart() {
      this.store.cartData = [];
      localStorage.clear();
    }
  },
};
</script> 

<template>
  <div class="wrapper">
    <div v-if="store.cartData.length > 0">
      <div class="text-end">
        <button class="btn ms_btn-red mb-3 btn-sm me-3" @click="emptyCart()">Svuota il carrello</button>
      </div>
      <ul class="list-group mb-4">
        <li v-for="(item, index) in store.cartData" :key="index" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="info">
              <span class="d-inline-block mb-1 text-capitalize">{{ item.name }}</span> - <span>{{ item.price
              }}€</span><br>

              <button class="btn ms_btn-yellow fw-bold"
                @click="decrease(item.id)"><i class="fa-solid fa-minus"></i></button>
              <span class="d-inline-block mx-2">{{ item.quantity }}</span>
              <button class="btn ms_btn-yellow fw-bold"
                @click="add(item.id)"><i class="fa-solid fa-plus"></i></button>
            </div>

            <button class="btn ms_btn-red btn-sm" @click="remove(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>

      <div class="d-flex justify-content-between align-items-baseline mx-3">
        <h4 class="fw-bold">Totale: {{ calculateTotal() }}€</h4>
        <router-link v-if="store.cartData.length > 0" to="/shipment" class="btn ms_btn-dark position-relative">Vai
          alla
          spedizione<button class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button></router-link>
      </div>
    </div>

    <p v-else class="alert mx-4">Il carrello è vuoto</p>
  </div>
</template>

<style scoped lang="scss">
.close-btn {
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
}

.list-group-item {
  background-color: #ffecd0;
  font-weight: bold;
}

.info {
  button {
    padding: 0 .3rem !important;
    font-size: .8rem;
  }
}

.alert {
  background-color: #ffecd0;
  font-weight: bolder;
}


</style>
