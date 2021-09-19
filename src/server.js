const fastify = require('fastify')({ logger: true })
const { createTableUser } = require('./model/createTableUser')
const swagger = require('../src/config/swagger')

/**
 * Criando as tabelas e dados
 */
createTableUser()

fastify.register(require('fastify-swagger'), swagger)
fastify.register(require('./routes/item'))

const PORT = process.env.SERVER_PORT || 9999

const start = async () => {
  try {
    await fastify.listen(PORT, '::')
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
