const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Horario = mysql.define('Imprensa',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    href: { 
      type: DataTypes.STRING, 
      allowNull: false
     },
     hour: {
       type: DataTypes.STRING,
       allowNull: true
     },
     duration: {
       type: DataTypes.STRING,
       allowNull: true,
       defaultValue: '1'
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
    tableName: 'horarios',
    timestamps: true
  }
);

// Horario.sync({ alter: true })

module.exports = Horario;