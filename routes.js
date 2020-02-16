const express = require('express')
const routes = express.Router()
const cadastro = require('./cadastro')
const VisitanteController = require('./src/controllers/VistanteController')
const entrar = require('./src/user/entrar')

routes.get('/', function (req, res) {
    return res.redirect('/entrar')
})

routes.get('/entrar', function (req, res) {
    return res.render('entrar/entrar')
});

routes.post('/entrar', entrar.post);

routes.get('/cadastro', function (req, res) {
    return res.render('cadastro/create')
})
routes.post('/cadastro', VisitanteController.store)

// routes.post('/cadastro', cadastro.post)

routes.get('/certificado', function (req, res) {
    return res.send('certificado')
})

routes.get('/confirmacao/:palestra/:codigoAutenticacao', function (req, res) {
    var lecture = req.params.palestra;
    var authenticationCode = req.params.codigoAutenticacao;
    return res.send(`Confirmação ${lecture}`);
});

module.exports = routes