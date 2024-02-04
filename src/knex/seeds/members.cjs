const { faker } = require('@faker-js/faker');
const { addYears } = require('date-fns');

exports.seed = async (knex) => {
  const memberData = [];

  for (let i = 1; i < 25; i++) {
    const startDate = faker.date.between({
      from: '2022-01-01T00:00:00.000Z',
      to: '2024-01-01T00:00:00.000Z',
    });

    memberData.push({
      membership_number: ('000' + (memberData.length + 1)).slice(-4),
      name: faker.person.fullName(),
      membership_size: 4,
      start_dt: startDate,
      expiration_dt: addYears(startDate, 1),
    });
  }

  console.log(memberData);

  await knex('member').insert(memberData);

  const members = await knex('member');

  const contactData = [];

  members.forEach(({ id }) => {
    contactData.push({
      member_id: id,
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address_1: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      send_renewal_notification: faker.datatype.boolean(),
      send_marketing_emails: faker.datatype.boolean(),
    });
  });

  await knex('contact_info').insert(contactData);
};
