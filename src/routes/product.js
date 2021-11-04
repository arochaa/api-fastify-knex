const { getProductsOpts, getProductOpts, postProduct } = require('../schema/product')

const productRoute = (fastify, option, done) => {
  // Get all Items
  fastify.get('/product', getProductsOpts)

  // // Get single Item
  fastify.get('/product/:id', getProductOpts)

  // // Post single Item
  fastify.post('/product', postProduct)

  // // Delete single Item
  // fastify.delete('/user/:id', deleteUserOpts)

  // // Update single Item
  // fastify.put('/user/:id', updateUserOpts)

  done()
}

module.exports = productRoute
