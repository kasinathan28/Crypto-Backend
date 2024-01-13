// router.js
const express = require('express');
const trendingController = require('../controller/trendingController');

const router = new express.Router();

router.get('/trending-coins', trendingController.getTrendingCoins);

module.exports = router;
