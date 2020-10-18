// Essa parte é o roteamento para definir como os terminais irão responder as solicitações
// do cliente mais infos https://expressjs.com/pt-br/guide/routing.html

// Importando a dependencia express
const express = require('express')
// Dependencia do proprio node js que tira bugs de uso de contrabarra
const path = require('path')


// Iniciando express
const server = express()
server
// Utilizando os arquivos estáticos (Css, images etc...)
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "view"))
.set('view engine', 'hbs')

// Criando rota
.get('/', (request, response) => {
    return response.render('index')
})

// Ligar servidor
server.listen(5500)