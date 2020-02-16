const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Visitante = require('../models/Visitante')

const connection = new Sequelize(dbConfig)

Visitante.init(connection)

module.exports = connection