const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
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

require('./src/database')

server.listen(5001, function () {
    console.log('server is running')
})