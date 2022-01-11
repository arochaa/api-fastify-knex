const server = require('./app')
const { createTableUser } = require('./model/dataInit')

const PORT = process.env.SERVER_PORT || 3001

const start = async () => {
  try {
    await server.listen(PORT, '::')
    await createTableUser()

    console.info(`Server online in port ${PORT}`)
    console.info('Database online')
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()
