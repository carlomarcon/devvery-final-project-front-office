<script>
import { RouterLink } from "vue-router";
import { store } from "../store";

export default {
  components: { RouterLink },
  data() {
    return { store };
  },
  methods: {},
  created() {},
};
</script>
<template>
  <section class="sectionShipment">
    <div class="order d-flex align-items-center">
      <router-link :to="{ name: 'home' }">
        <img class="m-3" src="../img/pittogramma.png" alt="" />
      </router-link>
      <h2>Dettagli di consegna</h2>
    </div>

    <div class="shipment w-75 h-75">
      <div class="orders-details mt-3">
        <h3>Il tuo ordine:</h3>
        <ul class="list-group mt-3">
          <li
            v-if="store.cartItems.length != 0"
            v-for="items in store.cartItems"
            class="list-group-item"
          >
            {{ items }}
          </li>
          <li class="list-group-item" v-else>Nessun articolo nel carrello</li>
        </ul>
      </div>
      <h3 class="mt-5">Dettagli richiesti:</h3>
      <form action="" class="">
        <div class="mb-3 mt-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Numero di telefono:</label
          >
          <input
            type="Phone number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Indirizzo:</label
          >
          <input
            type="Address"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Indirizzo"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Eventuali indicazioni:</label
          >
          <textarea
            class="form-control"
            id="description"
            rows="3"
            placeholder="Piano,citofono,scala.."
          ></textarea>
        </div>
        <button type="button" class="btn btn-warning mt-3">Invia</button>
      </form>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.sectionShipment {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .order {
    width: 100%;
    height: 15%;
    text-align: center;
    background-color: #fdb633;

    img {
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
