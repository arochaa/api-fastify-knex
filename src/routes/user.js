const { getUsersOpts, getUserOpts, postUserOpts, deleteUserOpts, updateUserOpts } = require('../schema/user')

const itemRoute = (fastify, option, done) => {
  // Get all Items
  fastify.get('/user', getUsersOpts)

  // Get single Item
  fastify.get('/user/:id', getUserOpts)

  // Post single Item
  fastify.post('/user', postUserOpts)

  // Delete single Item
  fastify.delete('/user/:id', deleteUserOpts)

  // Update single Item
  fastify.put('/user/:id', updateUserOpts)

  done()
}

module.exports = itemRoute
