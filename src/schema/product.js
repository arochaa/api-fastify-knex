const { listProducts, listProduct, createProduct, deleteProduct, updateProduct } = require('../controllers/product')

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

const getProductsOpts = {
  schema: {
    description: 'Endpoint for list all product',
    tags: ['product'],
    response: {
      200: {
        type: 'array',
        product: Product
      }
    }
  },
  handler: listProducts
}

const getProductOpts = {
  schema: {
    description: 'Endpoint for list single Product',
    tags: ['product'],
    response: {
      200: Product
    }
  },
  handler: listProduct
}

const postProduct = {
  schema: {
    description: 'Endpoint for insert single product',
    tags: ['product'],
    body: {
      type: 'object',
      required: ['price', 'brand', 'title', 'cd_product'],
      properties: {
        price: { type: 'string' },
        cd_product: { type: 'string' },
        brand: { type: 'string' },
        title: { type: 'string' }
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      }
    }
  },
  handler: createProduct
}

const deleteProductOpts = {
  schema: {
    description: 'Endpoint for delete single product',
    tags: ['product'],
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  },
  handler: deleteProduct
}

const updateProductOpts = {
  schema: {
    description: 'Endpoint for update single product',
    tags: ['product'],
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
  handler: updateProduct
}

module.exports = { getProductOpts, getProductsOpts, postProduct, deleteProductOpts, updateProductOpts }
