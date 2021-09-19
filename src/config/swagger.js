const swaggerConfiguration = {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'Dodcumentions for aplication API using lib fastify',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    // host: 'TEST-HOST-NAME',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'Schema for relationship with User object' }
    ],
    definitions: {
      User: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' }
        }
      }
    },
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    }
  }
}

module.exports = swaggerConfiguration
