const express = require('express');

const Cars = require('../data/db');

const router = express.Router();

router.get('/', (req, res) => {
    Cars.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "The cars information could not be retrieved"})
    })
})

router.get('/:id', (req, res) => {
    Cars.findById(req.params.id)
    .then(car => {
        if (!req.params.id) {
            res.status(404).json({error: "Could not find car with specified ID"})
        } else {
            res.status(200).json(car)
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "The cars information could not be retrieved"})
    })
})

router.post('/', (req, res) => {
    const {vin, make, model, mileage, transmissionType, status} = req.body;
    Cars.insert(req.body)
    .then(car => {
        if (!vin || !make || !model || !mileage || !transmissionType || !status) {
            res.status(400).json({error: "Please provide appropriate information for the car"})
        } else {
            res.status(201).json(car)
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "There was an error while saving the car to the database."})
    })
})


module.exports = router;