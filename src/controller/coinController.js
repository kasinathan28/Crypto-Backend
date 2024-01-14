// controllers/coinController.js
const coinService = require('../repositories/coinRepositary');

exports.storeCoinDetails = async (req, res) => {
  try {
    const { id, name, symbol, price } = req.body;
    console.log(req.body);

    const result = await coinService.storeCoinDetails({ id, name, symbol, price });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.status(201).json(result);
  } catch (error) {
    console.error('Error in coinController:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
