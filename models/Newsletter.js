
const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db')


const Newsletter = db.define('newsletter', {  
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {

});

// Newsletter.sync({ alter: true })

module.exports = Newsletter
 