const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the payment system'));

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`)
});

app.get('/available_payments', (req, res) => res.json({
  payment_methods: {
    credit_cards: true,
    paypal: false,
  },
}));

app.post('/login', (req, res) => res.send(`Welcome ${req.body.userName}`));

app.listen(7865, () => console.log('API available on locaclhost port 7865'));
