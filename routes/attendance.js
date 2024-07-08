const express = require('express');
const attendanceController = require('../controllers/attendanceController');
const router = express.Router();

router.get('/', attendanceController.getAllAttendances);
router.post('/', attendanceController.addAttendance);

module.exports = router;
