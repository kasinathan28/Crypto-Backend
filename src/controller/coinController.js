const coinRepository = require('../repositories/coinDataRepositary');

exports.addCoin = async (req, res) => {
  const coinDetails = req.body;
  console.log('Received Coin Details:', coinDetails);

  try {
    const result = await coinRepository.addOrUpdateCoin(coinDetails);

    if (result.success) {
      console.log(result.message, result.data);
      res.status(201).json(result);
    } else {
      console.error(result.message, result.error);
      res.status(400).json(result);
    }
  } catch (error) {
    console.error('Error during coin addition/update:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
