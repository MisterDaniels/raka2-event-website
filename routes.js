const express = require('express')
const routes = express.Router()

const entrar = require('./src/controllers/usuario/entrar')
const PalestraController = require('./src/controllers/PalestraController')
const VisitanteController = require('./src/controllers/VistanteController')
const confirmacaoPalestra = require('./src/controllers/palestra/palestraConfirmacao')


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

routes.get('/selecionaPalestra', PalestraController.index)
routes.get('/selecionaPalestra', function (req, res) {
    return res.render('palestra/selecionaPalestra')
})

routes.post('/cadastro', VisitanteController.store)


routes.get('/certificado', function (req, res) {
    return res.render('certificado/lista');
})

routes.get('/confirmacao/:palestra/:codigoAutenticacao', confirmacaoPalestra.get);

routes.get('/palestra', function (req, res) {
    return res.render('palestra/criarPalestra');
});

routes.post('/palestra', PalestraController.store);

routes.get('*', function (req, res) {
    return res.render('404');
});

module.exports = routes