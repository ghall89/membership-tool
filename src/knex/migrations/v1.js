exports.up = async (knex) => {
	await knex.schema.createTable('user', (t) => {
		t.uuid('id').defaultTo(knex.fn.uuid())
		t.string('email').notNullable()
		t.timestamps(true, true)
	})

	await knex.schema.createTable('member', (t) => {
		t.uuid('id').defaultTo(knex.fn.uuid())
		t.string('membership_number').unique().notNullable()
		t.string('name').notNullable()
		t.integer('membership_size').notNullable()
		t.date('start_dt').notNullable()
		t.date('expiration_dt').notNullable()
		t.timestamps(true, true)
	})
}

exports.down = async (knex) => {
	await knex.schema.dropTableIfExists('user')
	await knex.schema.dropTableIfExists('member')
}
