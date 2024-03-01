<script>
import axios from "axios";
import { create } from 'braintree-web-drop-in';
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
      braintreeInstance: null,
      showPayment: false,
      store,
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      foods: [],
      quantity: [],
      restaurant_id: store.cartData[0].restaurant_id,
      data: {},
      error: false
    };
  },
  methods: {
    insertOrder() {
      this.store.cartData.forEach(element => {
        this.foods.push(element.id)
        this.quantity.push(element.quantity)
      });

      this.data = {
        foods: this.foods,
        quantity: this.quantity,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone: this.phone,
        total_amount: JSON.parse(localStorage.getItem('total')),
        restaurant_id: this.restaurant_id
      }

      this.showPayment = true;

      create({
        authorization: 'sandbox_gpzz3ky6_8qxh27bqnbx8vsps',
        container: '#dropin-container'
      }, (error, instance) => {
        if (error) {
          console.error('Errore durante l\'inizializzazione di Braintree:', error);
          return;
        }

        this.braintreeInstance = instance;
      });
    },
    handlePayment() {
      if (!this.braintreeInstance) {
        console.error('L\'istanza di Braintree non è stata inizializzata correttamente');
        return;
      }
      // Richiedi il metodo di pagamento
      this.braintreeInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          console.error('Errore durante la richiesta del metodo di pagamento:', error);
          return;
        }
        // Effettua la richiesta al tuo server con il payload del pagamento
        this.sendPaymentPayload(payload);
      });
    },
    sendPaymentPayload() {
      // Effettua una richiesta HTTP POST al tuo server
      fetch('http://127.0.0.1:8000/api/orders/make/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: "fake-valid-nonce",
          amount: this.store.total,
  
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Errore nella richiesta al server');
          }
          return response.json();
        })
        .then(data => {
          
          console.log('Risposta dal server:', data);

          axios.post('http://127.0.0.1:8000/api/orders', this.data).then((resp) => {
            console.log(resp);
            this.store.total = 0;
            this.store.cartData = [];
            localStorage.removeItem('cartData');
          });
   
        })
        .catch(error => {
          this.error = true
          document.querySelector('.error').innerHTML = error
        });
    }
  }
};
</script>
 
<template>
  <div class="overflow-y-auto">
    <AppHeader />
    <div class="position-relative">
      <div class="ms-container container my-5">
        <h3 class="mb-4">Dettagli di consegna</h3>
        <div class="row mb-5 ms_wave">
          <!-- RIEPILOGO -->
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="card-header">
                <h5>Il tuo ordine</h5>
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
                      <td class="text-center">{{ items.quantity }}</td>
                      <td>{{ items.price }}€</td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="ps-2">Totale: {{ store.total }}€</h5>
              </div>
            </div>
          </div>

          <!-- FORM CLIENTE -->
          <div v-if="!showPayment" class="col-lg-8 col-md-12 mb-5">
            <div class="card">
              <div class="card-header">
                <h5>Dettagli cliente</h5>
              </div>
              <div class="card-body">
                <!-- FORM -->
                <form @submit.prevent="insertOrder">
                  <div class="form-group row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                    <div>
                      <label class="my-2" for="first_name">Nome</label>
                      <input type="text" class="form-control" id="first_name" placeholder="Inserisci il tuo nome" required
                        v-model="first_name">
                    </div>
                    <div>
                      <label class="my-2" for="last_name">Cognome</label>
                      <input type="text" class="form-control" id="last_name" placeholder="Inserisci il tuo cognome "
                        required v-model="last_name">
                    </div>
                    <div>
                      <label class="my-2" for="phone">Numero di telefono</label>
                      <input type="tel" class="form-control" id="phone" placeholder="Inserisci il cellulare" required
                        v-model="phone">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="my-2" for="address">Indirizzo </label>
                    <input type="text" class="form-control" id="address" placeholder="Inserisci l'indirizzo" required
                      v-model="address">
                  </div>

                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-outline-success mt-4">Procedi al pagamento</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div v-else class="col-lg-8 col-md-12">
            <div class="dropin">
              <div id="dropin-container"></div>
              <button @click="handlePayment" class="btn btn-outline-success">Effettua il pagamento</button>
              <span v-if="error" class="text-danger ms-3">Il pagamento non è andato a buon fine <span class="error"></span></span>
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

.ms_wave {
  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda_white.png);
    content: '';
    height: 50px;
    position: absolute;
    display: block;
    transform: rotate(180deg);
    z-index: 9;
    bottom: -90px;
    left: 0%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.dropin {
  margin-top: -33px;
}

.buttana {
  margin-top: 19px;
}
</style>