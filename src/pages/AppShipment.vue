<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { store } from "../store";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      activeSection: 'dataSection',
      store
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    }
  }
};
</script>

 
<template>
  <div class="wrapper">
    <AppHeader />

    <div class="ms-container container mt-5 mb-5">
      <h2>Dettagli di consegna</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Il tuo ordine</h5>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Prodotto</th>
                    <th scope="col">Quantità</th>
                    <th scope="col">Prezzo</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="items in store.cartData">
                    <th scope="row">{{ items.name }}</th>
                    <td>{{ items.quantity }} X</td>
                    <td>{{ items.price }}€</td>
                  </tr>
                </tbody>
              </table>

              <h5>Totale: {{ store.total }}€</h5>

            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Dettagli ordine</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group d-flex gap-5">
                  <div>
                    <label class="mb-2" for="name">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Inserisci il tuo nome" required>
                  </div>
                  <div>
                    <label class="mb-2" for="lastname">Cognome</label>
                    <input type="text" class="form-control" id="lastname" placeholder="Inserisci il tuo cognome " required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="mb-2" for="address">Indirizzo </label>
                  <input type="text" class="form-control" id="address" placeholder="Inserisci l'indirizzo" required>
                </div>
                <div class="form-group mt-3">
                  <label class="mb-2" for="phone-number">Numero di telefono</label>
                  <input type="tel" class="form-control" id="phone-number"
                    placeholder="Inserisci il numero di telefono" required>
                </div>
                <div class="form-group mt-3">
                  <label class="mb-2" for="istruction">Eventuali indicazioni per il corriere</label>
                  <input type="text" class="form-control" id="istruction"
                    placeholder="Esempio scala 1 interno 3">
                </div>

                <button type="submit" class="btn btn-primary">Procedi al pagamento</button>
              </form>
              <a href="http://localhost:3000/"> pagamento</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>