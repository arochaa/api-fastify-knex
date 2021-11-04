const Product = require('../model/Product')

const product = new Product()

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
  const sql = (await product.getOne(id)).shift()

  return sql
}

const createProduct = async (req, reply) => {
  const data = req.body
  const where = { cd_product: data.cd_product }

  const checkUserExist = await product.getOne(where)

  if (checkUserExist.length >= 1) return { message: `Product ${data.cd_product}, already exists` }

  const id = await product.create(data)

  console.log({ id: id.shift() })

  reply.send({ id: id.shift() }).code(201)
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
  const where = req.params
  const checkuser = await product.getOne(where)

  if (checkuser.length < 1) return { message: `User with id ${where.id}, not exist` }

  await product.update(data, where)
  reply.send({ message: `Item ${where.id} updated` })
}

module.exports = {
  listProducts,
  listProduct,
  createProduct,
  deleteProduct,
  updateProduct
}
