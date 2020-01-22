const express = require('express');

const carsRouter = require('./cars/carsRouter');
const carsRouterWithHelpers = require('./cars/carsRouterWithHelpers');

const server = express();

server.use(express.json());
// server.use('/api/cars', carsRouter);
server.use('/api/cars', carsRouterWithHelpers);

server.get('/', (req, res) => {
    res.send('This is working!');
});

module.exports = server;