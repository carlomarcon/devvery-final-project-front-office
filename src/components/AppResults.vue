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
  <div class="container-fluid ms_bg-yellow">

    <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-6 p-4">
      <div class="col g-4 d-flex justify-content-center" v-for="restaurant in this.store.restaurants">

        <div class="card">
          <div class="card-body">
            <img :src="`${this.baseUrl}/storage/${restaurant.cover_image}`" alt="" class="card-img-top mb-2" />
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
.container-fluid {
  position: relative;
  margin-top: 4rem;
  padding: 4rem 0 4rem 0;

  &::before {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    bottom: -40px;
    transform: rotate(180deg);
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;

  }

  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    top: -40px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

img {
  object-fit: cover;
  border: solid 0.5px #01222B;
  border-radius: 15px;
}</style>