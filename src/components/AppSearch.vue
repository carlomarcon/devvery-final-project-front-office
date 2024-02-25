<script>
export default {};
</script>
<template>
  <!-- MOBILE -->

  <div class="position-relative ms_sm">
    <form action="">
      <label for="Search"></label>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Ristoranti,pizzerie.." />
    </form>
  </div>

  <!-- DESKTOP -->

  <div class="wrapper ms_lg d-none">
    <div class="concept h-100 w-50 d-flex align-items-center">
      <h1>Il cibo che vuoi, quando e dove vuoi..Davvero!</h1>
    </div>
    <div class="search h-100 w-50 d-flex flex-column">
      <div class="van h-50 w-100">
        <img src="../img/camioncino.png" alt="van" />
      </div>
      <div class="ms_input h-50 w-100">
        <div class="position-relative">
          <form action="">
            <label for="Search">
              <i class="fa-solid fa-magnifying-glass"></i
            ></label>

            <input type="text" placeholder="Ristoranti,pizzerie.." />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
i {
  position: absolute;
  top: 50%;
  right: 73%;
  z-index: 1;
  font-size: 1.5rem;
}

input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1.5rem;
  height: 3rem;
  width: 18.4rem;
  border-radius: 11px;
  border-color: #01222b;
  text-align: center;
}
input::placeholder {
  color: #fdb633;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .ms_sm {
    display: none;
  }

  .ms_lg {
    height: 20rem;
    width: 100%;
    display: flex !important;

    .concept {
      padding: 0 0 0 1rem;
      color: #fdb633;
    }
    .search {
      padding: 5rem 0px 1rem 3rem;
      .van {
        img {
          height: 100px;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .ms_sm {
    display: none;
  }

  .ms_lg {
    height: 20rem;
    width: 100%;
    display: flex !important;

    .concept {
      margin-left: 3rem;
      color: #fdb633;
    }
    .search {
      padding: 5rem 1rem 1rem 7rem;

      .van {
        img {
          height: 100px;
        }
      }
    }
  }
}
@media (min-width: 1440px) {
  .ms_sm {
    display: none;
  }

  .ms_lg {
    height: 20rem;
    width: 100%;
    display: flex !important;

    .concept {
      margin-left: 14rem;
      color: #fdb633;
    }
    .search {
      padding: 6rem 10rem 1rem 7rem;
      .van {
        img {
          height: 100px;
        }
      }
    }
  }
}
</style>
