export default {
  client: 'postgresql',
  connection: {
    connectionString: import.meta.env.POSTGRES_URL,
  },
  migrations: {
    tableName: 'v1',
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
};
