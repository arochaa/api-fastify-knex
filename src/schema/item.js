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
    description: 'Endpoint for list all user',
    tags: ['user'],
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
    description: 'Endpoint for list single user',
    tags: ['user'],
    response: {
      200: Item
    }
  },
  handler: getItem
}

const postItemOpts = {
  schema: {
    description: 'Endpoint for insert single user',
    tags: ['user'],
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
    description: 'Endpoint for delete single user',
    tags: ['user'],
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
    description: 'Endpoint for update single user',
    tags: ['user'],
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

module.exports = { getItemsOpts, getItemOpts, postItemOpts, deleteItemOpts, updateItemOpts }
