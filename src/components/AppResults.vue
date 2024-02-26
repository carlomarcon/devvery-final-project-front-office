<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      baseUrl: "http://127.0.0.1:8000",
    };
  },
};
</script>
<template>
  <h2 class="text-center">
    Risultati trovati: {{ this.store.restaurants.length }}
  </h2>
  <div class="wrapper d-flex justify-content-center flex-row">
    <div
      class="card"
      v-for="restaurant in this.store.restaurants"
      style="width: 18rem"
    >
      <div class="card-body">
        <img
          :src="`${this.baseUrl}/storage/${restaurant.cover_image}`"
          alt=""
          class="card-img-top"
        />
        <h5 class="card-title">{{ restaurant.name }}</h5>
        <p class="card-text">Indirizzo: {{ restaurant.address }}</p>
        <p class="card-text">Telefono: {{ restaurant.phone }}</p>
        <router-link
          :to="{ name: 'show', params: { slug: restaurant.slug } }"
          class="btn btn-primary"
          >Vai al ristorante</router-link
        >
        <!-- <router-link
            :to="{ name: 'single-project', params: { slug: items.slug } }"
            >DETTAGLI</router-link -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  object-fit: contain;
  border: solid 0.5px #01222b;
  border-radius: 15px;
}
</style>
