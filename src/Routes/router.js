const express = require('express');
const trendingController = require('../controller/trendingController');
const searchController = require('../controller/searchController');
const LoginController = require('../controller/loginController');

const Coincontroller = require('../controller/coinController');

const SignupController = require('../controller/signUpController');
const FaveCoinController = require('../controller/favCoinsController');

const router = new express.Router();

// Routes to fetch the trending coins
router.get('/trending-coins', trendingController.getTrendingCoins);

// Routes to search the coins
router.get('/searchCoins', searchController.searchCoins);

// Routes to login the user
router.post('/login', LoginController.login);

// Routes to add the coin details to the database
router.post('/addCoin', Coincontroller.addCoin); 

// Route for the user signup
router.post('/signup', SignupController.signup);

// Route for adding a coin to the user's favorites
router.post('/favorites', FaveCoinController.addToFavorites);

// router for fetching the fav coins from the database
router.get('/favorites', FaveCoinController.getFavoriteCoins);

// router for deleting a coin from the user's favorites
router.post('/favorites/remove', FaveCoinController.removeFromFavorites);


module.exports = router;
