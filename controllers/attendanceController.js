const Attendance = require('../models/attendance');

exports.getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.json(attendances);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addAttendance = async (req, res) => {
  const { customerName, service, date } = req.body;
  try {
    const attendance = await Attendance.create({ customerName, service, date });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
