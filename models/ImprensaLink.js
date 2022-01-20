const { Sequelise, DataTypes, Model } = require('sequelize');
const mysql = require('../instances/mysql');

const ImprensaLink = mysql.define('ImprensaLink',
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
    link: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'imprensaLinks',
    timestamps: true
  }
);

ImprensaLink.sync({ alter: true })

module.exports = ImprensaLink;