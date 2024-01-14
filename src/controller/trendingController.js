const axios = require('axios');

const fetchTrendingCoins = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data;
};

exports.getTrendingCoins = async (req, res) => {
  try {
    console.log("getTrendingCoins");
    const trendingCoinsData = await fetchTrendingCoins();

    // Extract the required details for each trending coin
    const trendingCoins = trendingCoinsData.coins.slice(0, 12).map(coin => ({
      id: coin.item.id,
      coin_id: coin.item.coin_id,
      name: coin.item.name,
      symbol: coin.item.symbol,
      market_cap_rank: coin.item.market_cap_rank,
      large: coin.item.large,
      price: coin.item.data.price,
      sparkline: coin.item.data.sparkline,
    }));

    res.status(200).json({ success: true, data: trendingCoins });
    console.log(trendingCoins);
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    res.status(500).json({ success: false, error: "An error occurred during trending coins retrieval" });
  }
};
