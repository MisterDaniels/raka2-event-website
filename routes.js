const express = require('express')
const routes = express.Router()
const cadastro = require('./cadastro')
const VisitanteController = require('./src/controllers/VistanteController')

routes.get('/', function (req, res) {
    return res.redirect('/cadastro')
})

routes.get('/cadastro', function (req, res) {
    return res.render('cadastro/create')
})
routes.post('/cadastro', VisitanteController.store)

// routes.post('/cadastro', cadastro.post)

routes.get('/certificado', function (req, res) {
    return res.send('certificado')
})

module.exports = routes