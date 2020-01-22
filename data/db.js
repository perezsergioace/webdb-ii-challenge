const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    insert,
};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({ id: Number(id) });
}

function insert(car) {
    return db('cars')
    .insert(car, 'id')
    .then(ids => ({ id: ids[0] }));
}