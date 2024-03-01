<script>
import axios from "axios";
import { store } from "../store";
import { RouterLink } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {
      result: [],
      store,
      nameProduct: ""
    };
  },
  components: {
    AppHeader,
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
      this.nameProduct = "";
      this.nameProduct = product.name;
      const existingProduct = this.store.cartData.find(
        (item) => item.id == product.id
      );
      const myProduct = {
        id: product.id,
        restaurant_id: product.restaurant_id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };

      if (this.store.cartData[0] && myProduct.restaurant_id !== this.store.cartData[0].restaurant_id) {

        this.show.store.Error = true;
        // setTimeout(() => {
        //   this.show.store.Error = false;
        // }, 1000); // Hide error after 2 seconds
        

      } else if (existingProduct) {
        existingProduct.quantity++;

        this.show.store.Modal = true;
        setTimeout(() => {
          this.show.store.Modal = false;
        }, 3000); // Hide modal after 2 seconds

      } else {
        this.store.cartData.push(myProduct);

        this.show.store.Modal = true;
        setTimeout(() => {
          this.show.store.Modal = false;
        }, 3000); // Hide modal after 2 seconds
      }

      localStorage.setItem("cartData", JSON.stringify(this.store.cartData));
    },

    close() {
      this.show.store.Error = false;
    }
  },
};
</script>
<template>
  <AppHeader />
  <div class="wrapper">
    <div class="container">
      <h1 class="text-center ms_color-dark p-5">
        Ristorante {{ store.selectRestaurant }}
      </h1>

      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div v-for="item in result" class="col">

          <div class="card hover-zoom border-0 ms_bg-dark h-100">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="`http://127.0.0.1:8000/storage/${item.cover_image}`"
                  class="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="...">
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

  <transition class="text-center ms_modal-text" name="fade">
    <div v-if="show.store.Modal || show.store.Error" :class="show.store.Modal ? 'modal-correct' : 'modal-error'" class="active d-flex modal align-items-center justify-content-center">
      <div v-if="show.store.Modal" class="modal-content text-white p-5">

        <p class="fs-5"><strong class="ms_color-yellow p-1 fs-4">{{ nameProduct }}</strong> aggiunto al carrello!</p>

      </div>
      <div v-if="show.store.Error"
        class="err-content text-center p-5 d-flex flex-row justify-content-center position-relative align-items-center">

        <button type="button" class="btn ms_btn-red position-absolute top-0 end-0" @click="close"><i
            class="fa-solid fa-x"></i></button>

        <p class="fs-3">Non puoi ordinare da un altro ristorante!</p>
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
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
}

/* Styling for the modal */
.modal-correct {
  position: fixed;
  margin-top: 70vh;
  left: 50%;
  transform: translateX(-50%);
  width: 30% !important;
  display: none;
  justify-content: center;
  align-items: center;
  height: fit-content;
  z-index: 2;
}

.modal-error {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100% !important;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
  backdrop-filter: blur(5px);
}

.active {
  display: flex;
}

.modal-content {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
}

.err-content {
  border-radius: 10px;
  background-color: white;
  color: $ms_dark;
  border: 5px solid $ms_yellow;
  font-weight: bolder;
}

.ms_btn-red {
  background-color: rgba(255, 255, 255, 0);
  color: $ms_dark;
  border: 0;
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
