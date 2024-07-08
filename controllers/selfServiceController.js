const SelfService = require('../models/selfService');

exports.getAllSelfServices = async (req, res) => {
  try {
    const selfServices = await SelfService.findAll();
    res.json(selfServices);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addSelfService = async (req, res) => {
  const { plateWeight, totalPrice, date, operator, orderNumber } = req.body;
  try {
    const selfService = await SelfService.create({ plateWeight, totalPrice, date, operator, orderNumber });
    res.json(selfService);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
