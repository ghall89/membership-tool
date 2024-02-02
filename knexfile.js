export default {
  client: 'postgresql',
  connection: {
    connectionString: import.meta.env.POSTGRES_URL || process.env.POSTGRES_URL,
  },
  migrations: {
    tableName: 'v1',
    directory: './src/knex/migrations',
  },
  seeds: {
    directory: './src/knex/seeds',
  },
};
