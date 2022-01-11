const { getProductsOpts, getProductOpts, postProduct, deleteProductOpts, updateProductOpts } = require('../schema/product')

const productRoute = (fastify, option, done) => {
  // Get all Items
  fastify.get('/product', getProductsOpts)

  // // Get single Item
  fastify.get('/product/:id', getProductOpts)

  // // Post single Item
  fastify.post('/product', postProduct)

  // Delete single Item
  fastify.delete('/product/:id', deleteProductOpts)

  // Update single Item
  fastify.put('/product/:id', updateProductOpts)

  done()
}

module.exports = productRoute
