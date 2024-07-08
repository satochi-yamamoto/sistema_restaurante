const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

router.get('/', inventoryController.getAllProducts);
router.post('/', inventoryController.addProduct);

module.exports = router;
