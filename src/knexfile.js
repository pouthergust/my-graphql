// Update with your config settings.
const { user, password } = require("./.env")

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user,
      password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
