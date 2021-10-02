const Fastify = require('fastify').default
const { createTableUser } = require('./model/createTableUser')
const swagger = require('../src/config/swagger')
// const env = process.env.NODE_ENV || 'development'

// const knex = require('../src/config/knexfile')[env]
const fastify = Fastify(({ logger: true }))

createTableUser()

fastify.register(require('fastify-swagger'), swagger)
// fastify.register(require('fastify-knexjs'), knex, (err) => console.error(err))
fastify.register(require('./routes/user'))

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

module.exports = { fastify }
