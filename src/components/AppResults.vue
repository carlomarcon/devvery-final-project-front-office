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
  <div class="container-fluid">

  <h2 class="text-center">
    Risultati trovati: {{ this.store.restaurants.length }}
  </h2>


  <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-6">
    <div class="col g-4 d-flex justify-content-center" v-for="restaurant in this.store.restaurants">

      <div class="card"  style="width: 18rem">
        <div class="card-body">
          <img :src="`${this.baseUrl}/storage/${restaurant.cover_image}`" alt="" class="card-img-top" />
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">Indirizzo: {{ restaurant.address }}</p>
          <p class="card-text">Telefono: {{ restaurant.phone }}</p>
          <a href="#" class="btn btn-primary">Vai al ristorante</a>
        </div>
      </div>

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