const express = require('express')
const routes = express.Router()
const PalestraController = require('./src/controllers/PalestraController')
const VisitanteController = require('./src/controllers/VistanteController')
const confirmacaoPalestra = require('./src/controllers/palestra/palestraConfirmacao')
const CertificadoController = require('./src/controllers/certificado/CertificadoController');

routes.get('/', function (req, res) {
    return res.redirect('/entrar')
})

routes.get('/entrar', function (req, res) {
    return res.render('entrar/entrar')
});

//Modificar!!
//--------------------------------------------------

routes.get('/test', VisitanteController.test)

//------------------------------------------------

routes.post('/entrar', VisitanteController.index);

routes.get('/cadastro', function (req, res) {
    return res.render('cadastro/create')
})

routes.post('/cadastro', VisitanteController.store)

routes.get('/selecionaPalestra/:id', PalestraController.index)
routes.post('/selecionaPalestra/:id', VisitanteController.change)

routes.post('/certificado/lista/:id', VisitanteController.change)

routes.get('/palestras', PalestraController.list)

routes.get('/certificado', CertificadoController.get)

routes.get('/confirmacao/:palestra/:codigoAutenticacao', confirmacaoPalestra.get);

routes.post('/confirmacao/:palestra/:cpf', confirmacaoPalestra.post);

routes.get('/palestra', function (req, res) {
    return res.render('palestra/criarPalestra');
});

routes.post('/palestra', PalestraController.store);

routes.get('*', function (req, res) {
    return res.render('404');
});

module.exports = routes