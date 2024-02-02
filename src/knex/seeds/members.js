const { faker } = require('@faker-js/faker')
const { addYears } = require('date-fns')

exports.seed = (knex) => {
	const memberData = []

	for (let i = 1; i < 25; i++) {
		const startDate = faker.date.between({
			from: '2022-01-01T00:00:00.000Z',
			to: '2024-01-01T00:00:00.000Z',
		})

		memberData.push({
			membership_number: ('000' + (memberData.length + 1)).slice(-4),
			name: faker.person.fullName(),
			membership_size: 4,
			start_dt: startDate,
			expiration_dt: addYears(startDate, 1),
		})
	}

	console.log(memberData)

	return knex('member').insert(memberData)
}
