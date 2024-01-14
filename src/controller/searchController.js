const axios = require('axios');

const searchForCoins = async (query) => {
    console.log("searching for coins...");
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
    return response.data;
}

exports.searchCoins = async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ success: false, error: 'Missing query parameter' });
    }

    try {
        console.log("searchCoins");
        const searchResult = await searchForCoins(query);

        console.log("Search Result:", searchResult);

        if (!searchResult || !searchResult.coins || !Array.isArray(searchResult.coins)) {
            console.error("Invalid response format:", searchResult);
            return res.status(500).json({ success: false, error: "Invalid response format" });
        }

        const searchCoins = searchResult.coins.map(coin => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            market_cap_rank: coin.market_cap_rank,
            large: coin.large,
        }));

        res.status(200).json({ success: true, data: searchCoins });
        console.log(searchCoins);
    } catch (error) {
        console.error("Error searching coins:", error);
        res.status(500).json({ success: false, error: "An error occurred during coin search" });
    }
};
