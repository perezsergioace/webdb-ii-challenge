const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// GET request to /api/cars
router.get('/', async (req, res ,next) => {
    try {
        res.json(await db('cars').select())
    } catch(error) {
        next(error)
    }
});

// GET request to /api/cars/:id
router.get('/:id', async (req, res, next) => {
    try {
        const car = await db('cars').where('id', req.params.id).select()
        res.json(car)
    } catch(error) {
        next(error)
    }
})

// PUT request to /api/cars/:id
router.post('/', async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			transmissionType: req.body.transmissionType,
			status: req.body.status,
        }
        const [id] = await db('cars').insert(payload)
        res.json(await db('cars').where('id', id).first())
    } catch(error) {
        next(error)
    }
})



module.exports = router;