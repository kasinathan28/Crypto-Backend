// models/favModel.js
const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  coinId: {
    type: String,
    required: true,
  },
  coinLarge: {
    type: String,
    required: true,
  },
});

const FavoriteCoin = mongoose.model('FavoriteCoin', favSchema);

module.exports = FavoriteCoin;
