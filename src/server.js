const server = require('./app')

const PORT = process.env.SERVER_PORT || 3001

const start = async () => {
  try {
    await server.listen(PORT, '::')
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()
