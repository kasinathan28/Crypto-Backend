// repositories/favRepository.js
const FavoriteCoin = require('../models/favModel');

exports.addToFavorites = async (username, coinId, coinLarge) => {
  try {
    const existingFavorite = await FavoriteCoin.findOne({ userId: username, coinId });

    if (existingFavorite) {
      return { success: false, error: "Coin already in favorites" };
    }

    const newFavorite = new FavoriteCoin({
      userId: username,
      coinId,
      coinLarge,
    });

    await newFavorite.save();

    return { success: true, message: "Coin added to favorites successfully" };
  } catch (error) {
    console.error("Error in addToFavorites repository:", error);
    return { success: false, error: "An error occurred while adding to favorites" };
  }
};




// repositary for fetching the fav coins
exports.getFavoriteCoins = async (username) => {
  try {
    const favoriteCoins = await FavoriteCoin.find({ userId: username });
    return { success: true, favoriteCoins };
  } catch (error) {
    console.error("Error fetching favorite coins:", error);
    return { success: false, error: "An error occurred while fetching favorite coins" };
  }
};


// delete the fav copin from the database

exports.removeFromFavorites = async (username, coinId) => {
    try {
      const favoriteEntry = await FavoriteCoin.findOneAndDelete({
        userId: username,
        coinId: coinId,
      });
  
      if (!favoriteEntry) {
        return { success: false, error: "Favorite entry not found" };
      }
  
      return { success: true, message: "Coin removed from favorites successfully" };
    } catch (error) {
      console.error("Error in removeFromFavorites repository:", error);
      return { success: false, error: "An error occurred while removing from favorites" };
    }
  };