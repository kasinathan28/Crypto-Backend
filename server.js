const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

// Define a route for fetching real-time data
app.get('/realtime/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const realTimeData = await fetchRealTimeData(symbol);
    res.json({ success: true, data: realTimeData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



// Define a route for fetching trending coins
app.get('/trending', async (req, res) => {
  try {
    const trendingCoins = await fetchTrendingCoins();
    res.json({ success: true, data: trendingCoins });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to fetch real-time data (replace with your actual implementation)
const fetchRealTimeData = async (symbol) => {
  // Implement the logic to fetch real-time data
  return { symbol, price: 100 }; // Replace with actual data
};

const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    const trendingCoins = response.data.coins.map(coin => coin.item.id);
    return trendingCoins;
  } catch (error) {
    throw new Error('Error fetching trending coins: ' + error.message);
  }
};
