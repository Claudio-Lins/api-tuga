const Sequelize = require('sequelize')
const db = require('./db')

const Schedule = db.define('schedule', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  timeStart: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  columnDay: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  subtitle: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

//Schedule.sync({ alter: true })

module.exports = Schedule