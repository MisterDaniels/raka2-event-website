const Sequelize = require('sequelize')
const dbConfig = require('./config/database')
const Visitante = require('../models/Visitante')
const Palestra = require('../models/Palestra')

const connection = new Sequelize(dbConfig)

Visitante.init(connection)
Palestra.init(connection)

module.exports = connection