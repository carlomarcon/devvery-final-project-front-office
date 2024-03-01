<script>
import axios from 'axios';
import { store } from '../store';
import { RouterLink } from 'vue-router';
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {
      result: [],
      store,
      showModal: false,
      showError: false
    };
  },
  components: {
    AppHeader
  },
  created() {
    axios
      .get(`${this.store.baseUrl}/api/restaurants/` + this.$route.params.slug)
      .then((resp) => {
        this.result = resp.data.foods;
      });
  },
  methods: {
    addtoCart(product) {
      const existingProduct = this.store.cartData.find(
        (item) => item.id == product.id,
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


      } else if (existingProduct) {
        existingProduct.quantity++;

        this.showModal = true;
        // setTimeout(() => {
        //   this.showModal = false;
        // }, 1000); // Hide modal after 2 seconds

      } else {
        this.store.cartData.push(myProduct);

        this.showModal = true;
        // setTimeout(() => {
        //   this.showModal = false;
        // }, 1000); // Hide modal after 2 seconds
      }

      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },

    close() {
      this.showModal = false;
    }
  },
};
</script>
<template>
  <AppHeader />
  <div class="wrapper">


    <div class="container">

      <h1 class="text-center ms_color-dark p-5">Ristorante {{ store.selectRestaurant }}</h1>

      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div v-for="item in result" class="col">

        <div class="card hover-zoom border-0 ms_bg-dark h-100">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="`http://127.0.0.1:8000/storage/${item.cover_image}`" class="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="...">
            </div>
            <div class="col-lg-8 ">
              <div class="card-body">
                <h5 class="card-title text-light">{{ item.name }}</h5>
                <p class="card-text ms_description text-light">{{ item.description }}</p>
                <p class="card-text text-light">{{ item.price }} €</p>
              </div>
              <div class="text-end">
                <button @click="addtoCart(item)" class="btn ms_btn-yellow">+</button>
              </div>
              
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>

  <transition class="text-center w-75 ms_modal-text" name="fade">
    <div v-if="showModal || showError" class="active modal d-flex align-items-center justify-content-center">
      <div v-if="showModal" class="modal-content text-white text-center p-5 d-flex flex-row justify-content-center position-relative">
       
        <p>Prodotto aggiunto al carrello!</p>
        
        <button type="button" class="btn ms_btn-yellow position-absolute top-0 end-0" @click="close"><i class="fa-solid fa-x"></i></button>

      </div>
      <div v-if="showError" class="err-content text-white p-4">
        <p>Non puoi ordinare da un altro ristorante!</p>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.wrapper {
  background-color: #ffecd0;
  padding: 4rem 0 4rem 0;
  min-height: 100vh;
}

.ms_description {
  @media screen and (min-width: 990px) {
    height: 50px;
  }
  
}

.ms_modal-text {
  @media screen and (min-width: 576px) {
    width: 50% !important;
  }
}

.ms_btn-yellow {
  border-radius: 0;
}

.hover-zoom {
  transition: all .3s ease-in-out;
  z-index: 1;

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
}

/* Styling for the modal */
.modal {
  position: fixed;
  margin-top: 70vh;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  height: fit-content;
}

.active {
  display: flex;
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