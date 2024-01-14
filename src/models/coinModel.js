
const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: String, 
    required: true,
  },
 
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
