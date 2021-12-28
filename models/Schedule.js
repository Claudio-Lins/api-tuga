const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Schedule = mysql.define('Schedule',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    timeStart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    columnDay: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  },
  {
    tableName: 'schedule',
    timestamps: true,
  }
);

// Schedule.sync({ alter: true })

module.exports = Schedule;
