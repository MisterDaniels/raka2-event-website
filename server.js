const express = require('express')
const nunjucks = require('nunjucks')

const routes = require('./routes')
require('./src/database')
var session = require('express-session')
var bodyParser = require('body-parser')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log('server is running')
})