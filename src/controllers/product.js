const Product = require('../model/Product')
const HttpResponse = require('../helpers/responseHttp')

const product = new Product()
const httpResponse = new HttpResponse()

const listProducts = async (req, reply) => {
  try {
    return await product.get()
  } catch (err) {
    console.log(err)
    return err
  }
}

const listProduct = async (req, reply) => {
  const { id } = req.params
  const sql = await product.getOne(id)

  return sql.shift()
}

const createProduct = async (req, reply) => {
  const data = req.body
  const where = { cd_product: data.cd_product }

  const checkUserExist = await product.getOne(where)

  if (checkUserExist.length >= 1) return { message: `Product ${data.cd_product}, already exists` }

  const id = await (await product.create(data)).shift().toString()

  reply.code(201).send(httpResponse.serverSuccess(id))
}

const deleteProduct = async (req, reply) => {
  const data = req.params
  const checkUser = await product.getOne(data)

  if (checkUser.length < 1) return { message: `User with id ${data.id}, not exist` }

  await product.delete(data)
  reply.send({ message: `Delete id ${data.id} success` })
}

const updateProduct = async (req, reply) => {
  const data = req.body
  const { id } = req.params

  if (!id) return { message: 'Params in URL is not null' }

  const checkuser = await product.getOne({ id })

  if (checkuser.length < 1) return { message: `Product with id ${id}, not exist` }

  await product.update(data, { id })
  reply.send({ message: `Item ${id} updated` })
}

module.exports = {
  listProducts,
  listProduct,
  createProduct,
  deleteProduct,
  updateProduct
}
