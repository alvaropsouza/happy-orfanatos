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

// Criando rota
.get('/', pages.index)

// Ligar servidor
server.listen(5500)