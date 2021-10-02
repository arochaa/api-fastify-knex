const User = require('../model/User')

const user = new User()

const listUsers = async (req, reply) => {
  return await user.get()
}

const listUser = async (req, reply) => {
  const { id } = req.params
  return await user.getOne(id)
}

const createUser = async (req, reply) => {
  const data = req.body
  const where = { email: data.email }
  const checkUserExist = await user.getOne(where)

  if (checkUserExist.length >= 1) return { message: `Email ${data.email}, exist in database` }

  await user.create(data)
  reply.code(201).send(data)
}

const deleteUser = async (req, reply) => {
  const data = req.params
  const checkUser = await user.getOne(data)

  if (checkUser.length < 1) return { message: `User with id ${data.id}, not exist` }

  await user.delete(data)
  reply.send({ message: `Delete id ${data.id} success` })
}

const updateUser = async (req, reply) => {
  const data = req.body
  const where = req.params
  const checkuser = await user.getOne(where)

  if (checkuser.length < 1) return { message: `User with id ${where.id}, not exist` }

  await user.update(data, where)
  reply.send({ message: `Item ${where.id} updated` })
}

module.exports = {
  listUsers,
  listUser,
  createUser,
  deleteUser,
  updateUser
}
