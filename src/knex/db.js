import knex from 'knex';
import config from '../../knexfile';

let cached = global.pg;
if (!cached) cached = global.pg = {};

export const getKnex = () => {
  if (!cached.instance) cached.instance = knex(config);
  return cached.instance;
};
