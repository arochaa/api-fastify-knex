const { getProductOpts } = require('../schema/product')

const productRoute = (fastify, option, done) => {
  // Get all Items
  fastify.get('/product', getProductOpts)

  // // Get single Item
  // fastify.get('/user/:id', getUserOpts)

  // // Post single Item
  // fastify.post('/user', postUserOpts)

  // // Delete single Item
  // fastify.delete('/user/:id', deleteUserOpts)

  // // Update single Item
  // fastify.put('/user/:id', updateUserOpts)

  done()
}

module.exports = productRoute
