<script>
import axios from "axios";
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
      store,
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      total_amount: 0,
      foods: [],
      quantity: [],
      restaurant_id: store.cartData[0].restaurant_id
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
    insertOrder() {
      this.store.cartData.forEach(element => {
        this.foods.push(element.id)
        this.quantity.push(element.quantity)
      });

      const data = {
        foods: this.foods,
        quantity: this.quantity,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone: this.phone,
        total_amount: JSON.parse(localStorage.getItem('total')),
        restaurant_id: this.restaurant_id
      }

      axios.post('http://127.0.0.1:8000/api/orders', data).then((resp) => {
        console.log('Ordine salvato');
        this.$router.push('/');
      });
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
              <!-- FORM -->
              <form @submit.prevent="insertOrder">
                <div class="form-group d-flex gap-5">
                  <div>
                    <label class="mb-2" for="first_name">Nome</label>
                    <input type="text" class="form-control" id="first_name" placeholder="Inserisci il tuo nome" required
                      v-model="first_name">
                  </div>
                  <div>
                    <label class="mb-2" for="last_name">Cognome</label>
                    <input type="text" class="form-control" id="last_name" placeholder="Inserisci il tuo cognome "
                      required v-model="last_name">
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="mb-2" for="address">Indirizzo </label>
                  <input type="text" class="form-control" id="address" placeholder="Inserisci l'indirizzo" required
                    v-model="address">
                </div>
                <div class="form-group mt-3">
                  <label class="mb-2" for="phone">Numero di telefono</label>
                  <input type="tel" class="form-control" id="phone" placeholder="Inserisci il numero di telefono" required
                    v-model="phone">
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