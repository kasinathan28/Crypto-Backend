// coinConverterRepository.js
const axios = require('axios');

const convertCurrency = async (coinId, price, selectedCurrency) => {
    try {
        // Fetch exchange rate from CoinGecko API
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${selectedCurrency}`);
        const exchangeRate = response.data[coinId][selectedCurrency];

        // Convert price to the selected currency
        const convertedPrice = (price * exchangeRate).toFixed(2);

        return convertedPrice;
    } catch (error) {
        console.error('Error converting currency:', error);
        throw new Error('An error occurred during currency conversion');
    }
};

module.exports = {
    convertCurrency,
};
