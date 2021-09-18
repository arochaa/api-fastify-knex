const knex = require('../config/db')

const createTableUser = async () => {
  const user = await knex.schema.hasTable('user')
  if (!user) {
    await knex.schema
      .createTable('user', (table) => {
        table.increments()
        table.string('name')
        table.string('email', 128)
        table.timestamps(false, true)
      }).then(async () => {
        await knex('user').insert({ name: 'Anderson Rocha', email: 'arocha.dev@outlook.com' })
        await knex('user').insert({ name: 'Fernanda Santos', email: 'fe.dev@outlook.com' })
        await knex('user').insert({ name: 'Raimunda Rocha', email: 'ra.dev@outlook.com' })
      }).catch(e => console.error(e))
  }

  const product = await knex.schema.hasTable('product')
  if (!product) {
    await knex.schema
      .createTable('product', (table) => {
        table.increments().primary()
        table.decimal('price', 10, 2).notNullable()
        table.string('image').notNullable()
        table.string('brand')
        table.string('title').notNullable()
        table.integer('reviewScore')
        table.timestamps(false, true)
      }).then(async () => {
        await knex('product').insert({ price: 740.20, image: 'image', brand: 'Xiaomi', title: 'Poco x3 Pro', reviewScore: 0 })
        await knex('product').insert({ price: 840.20, image: 'image', brand: 'Sansung', title: 's9', reviewScore: 0 })
        await knex('product').insert({ price: 940.20, image: 'image', brand: 'Iphone', title: 'Iphone 6', reviewScore: 0 })
      }
      )
  }

  const favorite = await knex.schema.hasTable('favorite')
  if (!favorite) {
    await knex.schema
      .createTable('favorite', (table) => {
        table.increments().primary()
        table.foreign('id_product')
        table.timestamps(false, true)
      })
  }

  return { user: user, product: product, favorite: favorite }
}

module.exports = { createTableUser }
