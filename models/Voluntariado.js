const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Voluntariado = mysql.define('Voluntariado',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    telemovel: {
      type: DataTypes.STRING,
    },
    fileUrl: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'voluntariados',
    timestamps: true,
  }
);

// Voluntariado.sync({ alter: true })

module.exports = Voluntariado;