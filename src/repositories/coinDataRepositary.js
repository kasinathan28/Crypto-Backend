// coinRepository.js
const Coin = require('../models/coinModel');

async function addOrUpdateCoin(coinDetails) {
  try {
    const existingCoin = await Coin.findOne({ symbol: coinDetails.symbol });

    if (existingCoin) {
      // If the coin exists, update its values
      await Coin.updateOne({ symbol: coinDetails.symbol }, { $set: coinDetails });
      return {
        success: true,
        message: 'Coin updated successfully.',
      };
    } else {
      // If the coin doesn't exist, add it to the database
      const newCoin = new Coin(coinDetails);
      await newCoin.save();
      return {
        success: true,
        message: 'Coin added successfully.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during coin addition/update: ${error.message}`,
    };
  }
}

module.exports = {
  addOrUpdateCoin,
};
