const { getItemsOpts, getItemOpts, postItemOpts, deleteItemOpts, updateItemOpts } = require('../schema/item')

const itemRoute = (fastify, option, done) => {
  // Get all Items
  fastify.get('/items', getItemsOpts)

  // Get single Item
  fastify.get('/items/:id', getItemOpts)

  // Post single Item
  fastify.post('/items', postItemOpts)

  // Delete single Item
  fastify.delete('/items/:id', deleteItemOpts)

  // Update single Item
  fastify.put('/items/:id', updateItemOpts)

  done()
}

module.exports = itemRoute
