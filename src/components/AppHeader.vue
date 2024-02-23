<script>
export default {};
</script>
<template>
  <!-- MOBILE -->

  <nav class="navbar bg-body-tertiary p-4 ms_sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../img/logotipo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close ms_burger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- DESKTOP -->

  <nav class="ms_bg">
    <div class="logo"><img src="../img/logotipo.png" alt="" /></div>
    <div class="menu">
      <ul>
        <li>CHI SIAMO</li>
        <li><a href="" class="btn btn-warning">LOGIN</a></li>
        <li><a href="" class="btn btn-outline-warning">CARRELLO</a></li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@use "../styles/variables/variables.scss";
.ms_bg {
  display: none;
}
nav {
  background-color: white !important;

  span {
    height: 25px;
    width: 20px;
  }

  img {
    height: 2rem;
  }

  .ms_burger {
    border-color: #01222b;
    height: 35px;
    width: 46px;
    margin-top: 10px;
  }
}
@media (min-width: 768px) {
  .ms_sm {
    display: none !important;
  }

  .ms_bg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    .logo {
      img {
        height: 4rem;
      }
    }

    .menu {
      ul {
        height: 10px;
        li {
          display: inline-block;
          margin-right: 1.5rem;
        }
      }
    }
  }
}
</style>
