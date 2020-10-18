// Essa parte é o roteamento para definir como os terminais irão responder as solicitações
// do cliente mais infos https://expressjs.com/pt-br/guide/routing.html

// Importando o módulo express
const express = require('express')
const server = express()

// Criando rota
server.get('/', () => {
    console.log('oi');
})

// Ligar servidor
server.listen(5500)