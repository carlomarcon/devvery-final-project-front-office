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
  <div class="ms_container ms_bg-yellow align-items-center d-flex flex-column">

    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <h2 class="text-center ms_badge-dark mt-4">RISTORANTI TROVATI {{ this.store.restaurants.length }}</h2>
      </div>


      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 p-4">

        <router-link class="col g-4 d-flex justify-content-center" v-for="restaurant in this.store.restaurants"
          :to="{ name: 'show', params: { slug: restaurant.slug } }">

          <div class="card ms_bg-dark text-light hover-zoom rounded-5 w-100">
            <img class="card-img-top mb-2 h-50" :src="`${this.baseUrl}/storage/${restaurant.cover_image}`" alt="" />
            <div class="card-body">
              <h3 class="card-title">{{ restaurant.name }}</h3>
              <p class="card-text">{{ restaurant.description }}</p>
            </div>
          </div>

        </router-link>

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.ms_container {
  position: relative;
  margin-top: 4rem;
  min-height: 500px;

  a {
    text-decoration: none;
  }

  &::before {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    bottom: -62px;
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
    top: -61px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.hover-zoom {
  transition: all .3s ease-in-out;
  z-index: 1;
  padding: 1rem 1rem 0 1rem;

  img {
    border-radius: 20px 20px 0 0px;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
}
</style>