exports.up = async (knex) => {
  await knex.schema.createTable('user', (t) => {
    t.uuid('id').defaultTo(knex.fn.uuid());
    t.enu('role', ['admin', 'user']);
    t.string('email').notNullable().unique();
    t.string('password').notNullable();
    t.timestamps(true, true);
  });

  await knex.schema.createTable('member', (t) => {
    t.uuid('id').defaultTo(knex.fn.uuid());
    t.string('membership_number').unique().notNullable();
    t.string('name').notNullable();
    t.integer('membership_size').notNullable();
    t.date('start_dt').notNullable();
    t.date('expiration_dt').notNullable();
    t.uuid('created_by_id');
    t.uuid('updated_by_id');
    t.timestamps(true, true);
  });

  await knex.schema.createTable('contact_info', (t) => {
    t.uuid('id').defaultTo(knex.fn.uuid());
    t.uuid('member_id').notNullable().unique();
    t.string('email').notNullable().unique();
    t.string('phone');
    t.string('address_1');
    t.string('address_2');
    t.string('city');
    t.string('state');
    t.string('zip');
    t.boolean('send_renewal_notification').notNullable();
    t.boolean('send_marketing_emails').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user');
  await knex.schema.dropTableIfExists('member');
  await knex.schema.dropTableIfExists('contact_info');
};
