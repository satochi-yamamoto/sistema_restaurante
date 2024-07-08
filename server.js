const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');
const attendanceRoutes = require('./routes/attendance');
const orderRoutes = require('./routes/order');
const selfServiceRoutes = require('./routes/selfService');

// Use Routes
app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/order', orderRoutes);
app.use('/self-service', selfServiceRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
