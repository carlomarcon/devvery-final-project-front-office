const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', async (req, res, next) => {
  try {
    // Importa il modulo store.mjs usando import()
    const storeModule = await import("../src/store.mjs");
    const total = storeModule.store.total;
    
    
    const gateway = new braintree.BraintreeGateway({
      environment: braintree.Environment.Sandbox,
      // Usa le tue credenziali dal pannello di controllo Sandbox qui
      merchantId: '8qxh27bqnbx8vsps',
      publicKey: 'sgydspx29hm48z5j',
      privateKey: 'b637ce6f37fda5d199096ccda7d20726'
    });

    // Usa il nonce del metodo di pagamento qui
    const nonceFromTheClient = req.body.paymentMethodNonce;
    // Crea una nuova transazione per $10
    const newTransaction = await gateway.transaction.sale({
      amount: total,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        // Questa opzione richiede i fondi dalla transazione
        // una volta che è stata autorizzata con successo
        submitForSettlement: true
      }
    });
    
    res.send(newTransaction);
  } catch (error) {
    console.error('Errore durante l\'elaborazione della transazione:', error);
    res.status(500).send(error);
  }
});

module.exports = router;
