const { getItems, getItem, postItem, deleteItem, updateItem } = require('../controllers/item')

const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  }
}

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item
      }
    }
  },
  handler: getItems
}

const getItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: getItem
}

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      201: Item
    }
  },
  handler: postItem
}

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  },
  handler: deleteItem
}

const updateItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  },
  handler: updateItem
}

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
