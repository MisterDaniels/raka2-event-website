const Sequelize = require('sequelize')
const dbConfig = require('./config/database')
const Visitante = require('../models/Visitante')
const Palestra = require('../models/Palestra')
const VisitantePalestra = require('../models/VisitantePalestra')

const connection = new Sequelize(dbConfig)

Visitante.init(connection)
Palestra.init(connection)
Visitante.associate(connection.models)
Palestra.associate(connection.models)

module.exports = connection