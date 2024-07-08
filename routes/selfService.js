const express = require('express');
const selfServiceController = require('../controllers/selfServiceController');
const router = express.Router();

router.get('/', selfServiceController.getAllSelfServices);
router.post('/', selfServiceController.addSelfService);

module.exports = router;
