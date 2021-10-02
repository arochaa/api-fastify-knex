const { listUsers, listUser, createUser, deleteUser, updateUser } = require('../controllers/user')

const User = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    statusCode: { type: 'number' }
  }
}

const getUsersOpts = {
  schema: {
    description: 'Endpoint for list all user',
    tags: ['user'],
    response: {
      200: {
        type: 'array',
        user: User
      }
    }
  },
  handler: listUsers
}

const getUserOpts = {
  schema: {
    description: 'Endpoint for list single user',
    tags: ['user'],
    response: {
      200: {
        type: 'array',
        user: User
      }
    }
  },
  handler: listUser
}

const postUserOpts = {
  schema: {
    description: 'Endpoint for insert single user',
    tags: ['user'],
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        id: { type: 'number' }
      }
    },
    response: {
      201: User
    }
  },
  handler: createUser
}

const deleteUserOpts = {
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
  handler: deleteUser
}

const updateUserOpts = {
  schema: {
    description: 'Endpoint for update single user',
    tags: ['user'],
    body: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'number' }
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
  handler: updateUser
}

module.exports = { getUsersOpts, getUserOpts, postUserOpts, deleteUserOpts, updateUserOpts }
