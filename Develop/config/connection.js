require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = "postgres://postgres:123456@localhost:5433/ecommerce_db"
  ? new Sequelize("postgres://postgres:123456@localhost:5433/ecommerce_db")
  : new Sequelize("ecommerce_db", "postgres", "123456", {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
