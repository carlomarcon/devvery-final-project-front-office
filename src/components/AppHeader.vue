<script>
import AppCart from "./AppCart.vue";

export default {
  components: {
    AppCart,
  },
  methods: {},
};
</script>

<template >
  <nav class="navbar fixed-top bg-body-tertiary">
    <div class="container ">
      <a class="navbar-brand" href="#">
        <img src="../img/logotipo.png" alt="" />
      </a>


      <div class="d-flex gap-3">
        <a href="" class="btn d-none d-md-block d-lg-block ">CHI SIAMO</a>
        <a href="" class="btn btn-warning d-none d-md-block d-lg-block  ">LOGIN</a>
        <div><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Il tuo carrello</h2>
              <button type="button" class="btn-close ms_burger" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>

            <div class="offcanvas-body">
              <AppCart />
            </div>
          </div>
        </div>
      </div>

    </div>

  </nav>
</template>



<style lang="scss" scoped>
@use "../styles/variables/variables.scss";

img {
  height: 3rem;
}

nav {
  height: 5rem; 

}

i {
  font-size: 1.7rem;
}

ul {
  list-style-type: none;
  margin-top: 1rem;
}
</style>
