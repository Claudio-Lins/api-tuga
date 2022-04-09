const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Horario = mysql.define('Imprensa',
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
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hour: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '1'
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'horarios',
    timestamps: true
  }
);

// Horario.sync({ alter: true })

module.exports = Horario;