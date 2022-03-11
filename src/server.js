const express = require('express')
const routes = require('./routes/routes.js')
const app = express()
const router = express.Router()
const serverPort = 8080

// CONFIGURAÇÕES BASE DO EXPRESS E ROUTER

app.use('/', router)
app.set('view engine', 'ejs')
app.use(express.static('public'))

// INTEGRANDO O ROUTER

routes(router)


// CONFIGURANDO O SERVIDOR

app.listen(serverPort, () => {
  console.log('Servidor no ar e rodando na porta ' + serverPort)
})
