const db = require('../config/db')
class Product {
  constructor () {
    this.db = 'product'
  }

  get () {
    return db(this.db).orderBy('id', 'asc')
  }

  getOne (data) {
    return db(this.db).where(data)
  }

  create (data) {
    return db(this.db).insert(data).returning('id')
  }

  delete (data) {
    return db(this.db).delete().where(data)
  }

  update (data, where) {
    return db(this.db).update(data).where(where)
  }
}

module.exports = Product
