// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../instances/mysql';

const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const Newsletter = mysql.define('Newsletter',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

Newsletter.sync({ alter: true })

module.exports = Newsletter;