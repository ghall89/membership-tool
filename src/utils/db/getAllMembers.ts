import { getKnex } from '@knex/db';
import type { Member } from '../../types';

export type Response = {
  data: Member[];
  count: number;
  pages: number[];
};

export default async (page: number = 1) => {
  const knex = getKnex();
  let memberships: Response = {
    data: [],
    count: 0,
    pages: [],
  };

  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const [{ count }] = await knex('member').count();

    memberships.data = await knex('member').offset(offset).limit(limit);
    memberships.count = Number(count);
    memberships.pages = Array.from(
      { length: memberships.count / limit / 1 + 1 },
      (value, index) => 1 + index * 1,
    );
  } catch (error) {
    console.error(error);
  }

  return memberships;
};
