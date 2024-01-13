const axios = require('axios');

const fetchTrendingCoins = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
};

exports.getTrendingCoins = async (req, res) => {
  try {
    console.log("getTrendingCoins");
    const trendingCoinsData = await fetchTrendingCoins();

    // Extract the required details (id, name, price) for each coin
    const trendingCoins = trendingCoinsData.map(coin => ({
      id: coin.id,
      name: coin.name,
      price: coin.current_price,
    }));

    res.status(200).json({ success: true, data: trendingCoins });
    console.log(trendingCoins);
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    res.status(500).json({ success: false, error: "An error occurred during trending coins retrieval" });
  }
};
