const Fastify = require('fastify').default
const swagger = require('../src/config/swagger')
// const env = process.env.NODE_ENV || 'development'

// const knex = require('../src/config/knexfile')[env]
const fastify = Fastify(({ logger: true }))
const user = require('./routes/user')
const product = require('./routes/product')

fastify.register(require('fastify-swagger'), swagger)
fastify.register(user, { prefix: '/api/v1' })
fastify.register(product, { prefix: '/api/v1' })

module.exports = fastify
