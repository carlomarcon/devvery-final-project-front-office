<template>
  <div>
    <div id="dropin-container"></div>
    <button @click="handlePayment">Effettua il pagamento</button>
  </div>
</template>

<script>
import { create } from 'braintree-web-drop-in';

export default {
  data() {
    return {
      braintreeInstance: null,
      amountToPay: '10.00' // Imposta l'importo predefinito da addebitare
    };
  },
  mounted() {
    // Inizializza Braintree Drop-in
    create({
      authorization: 'sandbox_gpzz3ky6_8qxh27bqnbx8vsps',
      container: '#dropin-container'
    }, (error, instance) => {
      if (error) {
        console.error('Errore durante l\'inizializzazione di Braintree:', error);
        return;
      }
      // Salva l'istanza di Braintree per accedervi successivamente
      this.braintreeInstance = instance;
    });
  },
  methods: {
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
    sendPaymentPayload(payload) {
      // Effettua una richiesta HTTP POST al tuo server
      fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          paymentMethodNonce: payload.nonce,
          amount: this.amountToPay // Passa l'importo da addebitare al server
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella richiesta al server');
        }
        return response.json();
      })
      .then(data => {
        // Gestisci la risposta dal server
        console.log('Risposta dal server:', data);
        // Esegui qui le azioni necessarie in base alla risposta del server
      })
      .catch(error => {
        console.error('Errore durante la richiesta al server:', error);
        // Gestisci gli errori qui, ad esempio mostrando un messaggio all'utente
      });
    }
  }
};
</script>
