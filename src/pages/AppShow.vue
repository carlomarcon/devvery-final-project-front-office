<script>
import axios from 'axios';
import { store } from '../store';
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      result: [],
      store,
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
        (item) => item.id == product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        const myProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };
        this.store.cartData.push(myProduct);
      }
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
      console.log(this.store.cartData);
    },
  },
};
</script>
<template>
  <body>
    <router-link class='btn btn-outline-warning' :to='{ name: "home" }'
      ><i class='fa-solid fa-house'></i
    ></router-link>
    <h1 class="text-center p-3">Ristorante {{ this.$route.params.slug }}</h1>
    <div class="d-flex flex-column align-items-center p-3 gap-3">
      <h3 class="text-center fs-1">Menu</h3>
      <div class="fs-2 d-flex flex-column" v-for="items in result">
        <div>
          {{ items.name }} <span>{{ items.price }}€</span>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <img
            :src="`http://127.0.0.1:8000/storage/${items.cover_image}`"
            alt=""
          />
          <button class="w-100" @click="addtoCart(items)">Aggiungi</button>
        </div>
      </div>
    </div>
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
</style>