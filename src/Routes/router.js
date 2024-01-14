// router.js
const express = require('express');
const trendingController = require('../controller/trendingController');
const searchController = require('../controller/searchController');
const LoginController = require('../controller/loginController');
const CoinController = require('../controller/coinController');
const router = new express.Router();


// Routes to fetch the trending coins
router.get('/trending-coins', trendingController.getTrendingCoins);

// Routes to search the coins
router.get('/searchCoins', searchController.searchCoins );

// Routes to login the user
router.post('/login',LoginController.login);

// Routes to add the coin details to the database
router.post('/addCoin',CoinController.storeCoinDetails);

module.exports = router;
