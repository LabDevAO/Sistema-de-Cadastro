const connectToDB = require('./db/config')
const app = require('./app')

connectToDB()
  .then(pool => {
    console.log('Pool de conexões criado com sucesso!')

    app.set('dbPool', pool)

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Servidor Express iniciado na porta ${PORT}`)
    })
  })
  .catch(error => {
    console.error('Erro durante a criação do pool de conexões:', error)
    process.exit(1)
  })
