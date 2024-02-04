import { getKnex } from '@knex/db';
import z from 'zod';

const schema = z.object({
  id: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  renewalNotifications: z.boolean().optional(),
  marketingEmails: z.boolean().optional(),
});

export default async (params: {}) => {
  const knex = getKnex();

  try {
    const validatedParams = schema.parse(params);

    await knex('contact_info').where('id', validatedParams.id).update({
      email: validatedParams?.email,
      phone: validatedParams?.phone,
      address_1: validatedParams?.address1,
      address_2: validatedParams?.address2,
      city: validatedParams?.city,
      state: validatedParams?.state,
      zip: validatedParams?.zip,
      send_renewal_notification: validatedParams?.renewalNotifications,
      send_marketing_emails: validatedParams?.marketingEmails,
    });
  } catch (error) {
    console.error(error);
  }
};
