<script>
import AppCart from "./AppCart.vue";

export default {
  components: {
    AppCart,
  }
};
</script>

<template >
  <header>
    <nav class="navbar fixed-top bg-body-tertiary flex-nowrap">
      <div class="container ">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img src="../assets/images/main/logotipo.png" alt="" />
        </router-link>

        <div class="d-flex gap-2 align-items-center">
          <a href="" class="btn d-none d-md-block fw-bold">CHI SIAMO</a>
          <a href="http://127.0.0.1:8000" class="btn ms_btn-yellow d-block">LOGIN</a>
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

template {
  z-index: 9999;
}

img {
  height: 40px;
}

i {
  font-size: 1.5rem;
}

</style>
