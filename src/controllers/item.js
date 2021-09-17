let items = require('../../data')
const { v4: uuidv4 } = require('uuid')

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params
  const item = items.find((item) => item.id === id)

  reply.send(item)
}

const postItem = (req, reply) => {
  const { name } = req.body

  const item = {
    id: uuidv4(),
    name
  }

  items = [...items, item]

  reply.code(201).send(item)
}

const deleteItem = (req, reply) => {
  const { id } = req.params

  items = items.filter(item => item.id !== id)

  reply.send({ message: `Item ${id} removed` })
}

const updateItem = (req, reply) => {
  const { id } = req.params
  const { name } = req.body

  items = items.map(item => (item.id === id ? { id, name } : item))

  reply.send({ message: `Item ${id} updated` })
}

module.exports = {
  getItems,
  getItem,
  postItem,
  deleteItem,
  updateItem
}