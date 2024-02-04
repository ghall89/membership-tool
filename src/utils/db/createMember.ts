import { getKnex } from '@knex/db';
import z from 'zod';
import { addYears } from 'date-fns';
import type { CreateParams } from '../../types';

const createSchema = z.object({
  name: z.string(),
  memberSize: z.coerce.number(),
  startDate: z.coerce.date(),
  lengthInYrs: z.coerce.number(),
});

export default async (params: CreateParams) => {
  const knex = getKnex();
  try {
    const members = await knex('member');

    const validatedParams = createSchema.parse(params);

    await knex('member').insert({
      membership_number: ('000' + (members.length + 1)).slice(-4),
      name: validatedParams.name,
      membership_size: validatedParams.memberSize,
      start_dt: validatedParams.startDate,
      expiration_dt: addYears(
        new Date(validatedParams.startDate),
        validatedParams.lengthInYrs,
      ),
    });
  } catch (error) {
    console.error(error);
  }
};
