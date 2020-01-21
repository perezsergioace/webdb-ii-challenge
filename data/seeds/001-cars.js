exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate() // resets the id (primary key) back to 1
		.then(function() {
			// Inserts seed entries
			return knex('cars').insert([
				{
					vin: '1234A',
					make: 'Toyota',
					model: 'Camry',
					mileage: 10000,
					transmissionType: 'Manual',
					status: 'Clean'
				},
				{
					vin: '5678B',
					make: 'Nissan',
					model: 'Sentra',
					mileage: 10000,
					transmissionType: 'N/A',
					status: 'Clean'
				},
				{
					vin: '1997S',
					make: 'Ford',
					model: 'Mustang',
					mileage: 10000,
					transmissionType: 'N/A',
					status: 'Salvage'
				}
			]);
		});
};
