const express = require('express')
const routes = express.Router()
const VisitanteController = require('./src/controllers/VistanteController')
const entrar = require('./src/controllers/usuario/entrar')
const confirmacaoPalestra = require('./src/controllers/palestra/palestraConfirmacao')
const PalestraController = require('./src/controllers/PalestraController')

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

<<<<<<< HEAD
routes.get('/selecionaPalestra', PalestraController.index)
=======
routes.get('/selecionaPalestra', function (req, res) {
    return res.render('palestra/selecionaPalestra')
})
>>>>>>> 653ccfe3784c9ad2ea68d2f33f696434c38daf87

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