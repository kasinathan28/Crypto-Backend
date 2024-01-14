// services/coinService.js
const Coin = require('../models/coinModel');

exports.storeCoinDetails = async ({ id, name, symbol, price }) => {
  try {
    const existingCoin = await Coin.findOne({ id });

    if (existingCoin) {
      return { success: false, error: 'Coin with this ID already exists' };
    }

    const newCoin = new Coin({
      id,
      name,
      symbol,
      price,
    });

    await newCoin.save();

    return { success: true, message: 'Coin details stored successfully' };
  } catch (error) {
    console.error('Error storing coin details:', error);
    throw { success: false, error: 'An error occurred while storing coin details' };
  }
};
