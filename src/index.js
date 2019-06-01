const express = require('express')
const cors = require('cors')

// Cria aplicação express
const app = express()

// Atribuir os middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.use('/api', require('./routes'))

// Iniciar o servidor
app.listen(3333, error => {
  if (error) {
    console.log(error.message)
    process.exit(1)
  }

  console.log('Running at 3333 port...')
})
