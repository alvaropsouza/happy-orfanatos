// Essa parte é o roteamento para definir como os terminais irão responder as solicitações
// do cliente mais infos https://expressjs.com/pt-br/guide/routing.html

// Importando dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')


// Iniciando express
const server = express()
server
// Utilizando os arquivos estáticos (Css, images etc...)
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Rotas da aplicação
.get('/', pages.index)
.get('/create-orphanage', pages.createOrphanage)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)

// Ligar servidor
server.listen(5500)