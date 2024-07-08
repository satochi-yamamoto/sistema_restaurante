const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.get('/', orderController.getAllOrders);
router.post('/', orderController.addOrder);
router.put('/status', orderController.updateOrderStatus);

module.exports = router;
