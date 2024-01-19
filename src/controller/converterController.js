// coinconverterController.js
const coinConverterRepository = require("../repositories/coinConverterRepositary");

exports.converter = async (req, res) => {
    console.log("converter called");

    try {
        const { coinId, price, selectedCurrency } = req.body;

        // Validate input parameters
        if (!coinId || !price || !selectedCurrency) {
            return res.status(400).json({ success: false, error: "Missing required parameters" });
        }

        // Convert currency
        const convertedPrice = await coinConverterRepository.convertCurrency(coinId, price, selectedCurrency);

        if (isNaN(convertedPrice)) {
            return res.status(500).json({ success: false, error: 'Invalid conversion result' });
        }

        res.status(200).json({ success: true, data: { convertedPrice } });
        console.log(`Successfully converted currency for ${coinId}: ${convertedPrice}`);
    } catch (error) {
        console.error('Error during currency conversion:', error);

        if (error.message.includes('Conversion rate for')) {
            return res.status(400).json({ success: false, error: 'Selected currency not supported' });
        }

        res.status(500).json({ success: false, error: 'An error occurred during currency conversion' });
    }
};
