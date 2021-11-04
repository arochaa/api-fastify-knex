const config = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      database: 'app_db',
      user: 'app',
      password: 'app',
      port: '5432'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

module.exports = config
