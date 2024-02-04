import { getKnex } from '@knex/db';
import z from 'zod';
import { addYears } from 'date-fns';

const schema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  memberSize: z.coerce.number(),
  lengthInYrs: z.coerce.number(),
  renewalNotifications: z.boolean().default(false),
  marketingEmails: z.boolean().default(false),
  startDate: z.coerce.date(),
});

export default async (params: {}) => {
  const knex = getKnex();
  try {
    const validatedParams = schema.parse(params);

    await knex.transaction(async (trx) => {
      // get all members in db (for generating member_id)
      const members = await trx('member', 'member_id');

      // add member to db
      console.log('adding member...');
      const [member] = await trx('member').insert(
        {
          membership_number: ('000' + (members.length + 1)).slice(-4),
          name: validatedParams.name,
          membership_size: validatedParams.memberSize,
          start_dt: validatedParams.startDate,
          expiration_dt: addYears(
            new Date(validatedParams.startDate),
            validatedParams.lengthInYrs,
          ),
        },
        'id',
      );

      const { id: member_id } = member;

      // add contact info to db
      console.log('member added, adding contact info...');
      await trx('contact_info').insert({
        member_id,
        email: validatedParams.email,
        phone: validatedParams?.phone,
        address_1: validatedParams?.address1,
        address_2: validatedParams?.address2,
        city: validatedParams?.city,
        state: validatedParams?.state,
        zip: validatedParams?.zip,
        send_renewal_notification: validatedParams?.renewalNotifications,
        send_marketing_emails: validatedParams?.marketingEmails,
      });
    });
  } catch (error) {
    console.error('failed to add member: ', error);
  }
};
