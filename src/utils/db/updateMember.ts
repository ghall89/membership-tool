import { getKnex } from '@knex/db';
import z from 'zod';
import { addYears } from 'date-fns';

const schema = z.object({
  id: z.string(),
  name: z.string().optional(),
  memberSize: z.coerce.number(),
  renewDate: z.coerce.date().optional(),
  renewalLengthInYrs: z.coerce.number(),
});

export default async (params: {}) => {
  const knex = getKnex();

  try {
    const validatedParams = schema.parse(params);

    await knex('member')
      .where('id', validatedParams.id)
      .update({
        name: validatedParams?.name,
        membership_size: validatedParams?.memberSize,
        expiration_dt: validatedParams.renewDate
          ? addYears(
              new Date(validatedParams.renewDate),
              validatedParams.renewalLengthInYrs,
            )
          : null,
      });
  } catch (error) {
    console.error(error);
  }
};
