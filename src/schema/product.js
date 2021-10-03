const { listProducts } = require('../controllers/product')

const Product = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    price: { type: 'string' },
    image: { type: 'string' },
    brand: { type: 'string' },
    title: { type: 'string' },
    reviewScore: { type: 'number' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

const getProductOpts = {
  schema: {
    description: 'Endpoint for list all product',
    tags: ['product'],
    response: {
      200: {
        type: 'array',
        user: Product
      }
    }
  },
  handler: listProducts
}

// const getUserOpts = {
//   schema: {
//     description: 'Endpoint for list single user',
//     tags: ['user'],
//     response: {
//       200: {
//         type: 'array',
//         user: User
//       }
//     }
//   },
//   handler: listUser
// }

// const postUserOpts = {
//   schema: {
//     description: 'Endpoint for insert single user',
//     tags: ['user'],
//     body: {
//       type: 'object',
//       required: ['name'],
//       properties: {
//         name: { type: 'string' },
//         email: { type: 'string' },
//         id: { type: 'number' }
//       }
//     },
//     response: {
//       201: User
//     }
//   },
//   handler: createUser
// }

// const deleteUserOpts = {
//   schema: {
//     description: 'Endpoint for delete single user',
//     tags: ['user'],
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           message: { type: 'string' }
//         }
//       }
//     }
//   },
//   handler: deleteUser
// }

// const updateUserOpts = {
//   schema: {
//     description: 'Endpoint for update single user',
//     tags: ['user'],
//     body: {
//       type: 'object',
//       required: ['id'],
//       properties: {
//         id: { type: 'number' }
//       }
//     },
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           message: { type: 'string' }
//         }
//       }
//     }
//   },
//   handler: updateUser
// }

module.exports = { getProductOpts }
