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
    linkYoutube: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datePublished: {
      type: DataTypes.DATE,
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