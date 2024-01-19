// signupController.js
const signupRepository = require('../repositories/singUpRepositary');

exports.signup = async (req, res) => {
  const { username, password, currency } = req.body;

  const signupResult = await signupRepository.signupUser(username, password, currency);

  if (signupResult.success) {
    res.status(201).json(signupResult);
  } else {
    res.status(400).json(signupResult);
  }
};

