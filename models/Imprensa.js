const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Imprensa = mysql.define('Imprensa',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'imprensas',
    timestamps: true
  }
);

// Imprensa.sync({ alter: true })

module.exports = Imprensa;