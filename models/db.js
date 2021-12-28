const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
      timestamps: true,
    },
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully!')
  })
  .catch(() => {
    console.log('Unable to connect to the database')
  })

module.exports = sequelize


// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize(
//   'sintoniz_api_dev',
//   'sintoniz_api_dev_admin',
//   'nc!#QC!u@KG',
//   {
//     host: '185.240.248.86',
//     dialect: 'mysql',
//     define: {
//       timestamps: true,
//     },
//   }
// )

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection with DB has been established successfully.')
//   })
//   .catch(() => {
//     console.log('Unable to connect to the database')
//   })

// module.exports = sequelize



// DB_NAME=sintoniz_develop-api
// DB_USER=sintoniz_clins
// DB_PASS=sq88e2iutGi7
// DB_HOST=185.240.248.86