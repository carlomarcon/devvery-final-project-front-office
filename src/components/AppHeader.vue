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
  <header>
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container ">

        <a class="navbar-brand" href="#">
          <img src="../img/logotipo.png" alt="" />
        </a>

        <div class="d-flex gap-3 align-items-center">
          <a href="" class="btn d-none d-md-block fw-bold">CHI SIAMO</a>
          <a href="http://127.0.0.1:8000" class="btn ms_btn-yellow d-none d-md-block">LOGIN</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>

      </div>
    </nav>
  </header>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Il tuo carrello</h2>
      <button type="button" class="btn-close ms_burger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <AppCart />
    </div>
  </div>
  
</template>



<style lang="scss" scoped>

img {
  height: 40px;
}

i {
  font-size: 1.5rem;
}

</style>
