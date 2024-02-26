<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      baseUrl: 'http://127.0.0.1:8000'
    };
  },
};
</script>
<template>
  <h2 class="text-center">
    Risultati trovati: {{ this.store.restaurants.length }}
  </h2>
  <div class="wrapper d-flex justify-content-center">
    <div class="card" style="width: 18rem">
    <!-- <img :src="`${baseUrl}/storage/${restaurant.cover_image}`" alt="" /> -->
      <div class="card-body" v-for="restaurant in this.store.restaurants">
        <h5 class="card-title">{{ restaurant.name }}</h5>
        <p class="card-text">Indirizzo: {{ restaurant.address }}</p>
        <p class="card-text">Telefono: {{ restaurant.phone }}</p>
        <a href="#" class="btn btn-primary">Vai al ristorante</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  object-fit: contain;
  border: solid 0.5px #01222B;
  border-radius: 15px;
}
</style>