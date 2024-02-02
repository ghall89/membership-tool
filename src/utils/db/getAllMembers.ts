import { getKnex } from '@knex/db';
import type { Member } from '../../types';

export default async () => {
  const knex = getKnex();
  let memberships: Member[];

  try {
    memberships = await knex('member');
    return memberships;
  } catch (error) {
    console.error(error);
    return [];
  }
};
