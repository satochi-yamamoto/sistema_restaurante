const Order = require('../models/order');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addOrder = async (req, res) => {
  const { orderNumber, status, total, customerName } = req.body;
  try {
    const order = await Order.create({ orderNumber, status, total, customerName });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderNumber, status } = req.body;
  try {
    const order = await Order.findOne({ where: { orderNumber } });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.status = status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
