const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Programa = mysql.define('Programa',
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    playlist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },

  },
  {
    tableName: 'programas',
    timestamps: true
  }
);

// Programa.sync({ alter: true })
// 
module.exports = Programa;