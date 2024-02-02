import { getKnex } from '@knex/db';
import type { Member } from '../../types';

export default async (membership_number: string) => {
  const knex = getKnex();
  let membership: Member;

  try {
    membership = await knex('member').where({
      membership_number,
    });

    return membership;
  } catch (error) {
    console.error(error);
  }
};
