
const express = require('express');
const router = express.Router();
const braintree = require('braintree');
const totale = '50.00';

router.post('/', (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: '8qxh27bqnbx8vsps',
    publicKey: 'sgydspx29hm48z5j',
    privateKey: 'b637ce6f37fda5d199096ccda7d20726'
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gateway.transaction.sale({
    amount: totale,  //inserisci qui l'importo della tranzazione dando una variabile al totale del carrello
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, (error, result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
  });
});




module.exports = router;
