import { getKnex } from '@knex/db';
import { addYears } from 'date-fns';
import { kn } from 'date-fns/locale';

type Params = {
  name: string;
  memberSize: number;
  startDate: Date;
  lengthInYrs: number;
};

export default async (params: Params) => {
  const knex = getKnex();
  try {
    const memberCount = await knex('member').count();

    await knex('member').insert({
      membership_number: ('000' + (memberCount + 1)).slice(-4),
      name: params.name,
      membership_size: params.memberSize,
      start_dt: params.startDate,
      expiration_dt: addYears(new Date(params.startDate), params.lengthInYrs),
    });
  } catch (error) {
    console.error(error);
  }
};
