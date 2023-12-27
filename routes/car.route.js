const express = require('express');
const car_controller = require('../controllers/car.controller');

const car_router = express.Router();

car_router.get("/getAllCars", car_controller.getAllCars);
car_router.post('/createCar',car_controller.createCar);
car_router.delete('/deleteCar/:id',car_controller.deleteCarById)
car_router.get('/:id',car_controller.getCarById)
car_router.put('/updateCar/:id',car_controller.updateCarById)

module.exports = car_router;
