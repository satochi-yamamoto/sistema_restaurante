const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SelfService = sequelize.define('SelfService', {
  plateWeight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  operator: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = SelfService;
