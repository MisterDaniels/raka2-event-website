const express = require('express')
const routes = express.Router()
const cadastro = require('./cadastro')
const login = require('./src/user/login')

routes.get('/', function (req, res) {
    return res.redirect('/entrar')
})

routes.get('/entrar', function (req, res) {
    return res.render('login/entrar')
});

routes.post('/entrar', login.post);

routes.get('/cadastro', function (req, res) {
    return res.render('cadastro/create')
})

routes.post('/cadastro', cadastro.post)

routes.get('/certificado', function (req, res) {
    return res.send('certificado')
})

routes.get('/confirmacao/:palestra', function (req, res) {
    var lecture = req.params.palestra;
    return res.send(`Confirmação ${lecture}`);
});

module.exports = routes