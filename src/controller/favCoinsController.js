// FavCoinController.js

const favRepository = require("../repositories/favRepositary");

// adding coins to the favorite
exports.addToFavorites = async (req, res) => {
  try {
    const { username, coinId, coinLarge } = req.body;

    const result = await favRepository.addToFavorites(
      username,
      coinId,
      coinLarge
    );

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error("Error in addToFavorites controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// fetching the favorite coins

exports.getFavoriteCoins = async (req, res) => {
  try {
    const { username } = req.query;

    const result = await favRepository.getFavoriteCoins(username);

    if (result.success) {
      res.status(200).json({ favoriteCoins: result.favoriteCoins });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error("Error in getFavoriteCoins controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.removeFromFavorites = async (req, res) => {
  try {
    const { username, coinId } = req.body;

    const result = await favRepository.removeFromFavorites(username, coinId);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error("Error in removeFromFavorites controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
