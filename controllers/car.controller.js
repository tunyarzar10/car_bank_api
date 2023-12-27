const car_service = require("../services/car.service.js");

const getAllCars = async (req, res) => {
  try {
    const cars = await car_service.getCars();
    // console.log("cars",cars)
    res.status(200).json({
      success: true,
      payload: cars,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createCar = async (req, res) => {
  try {
    const {
      vehicle_class,
      model,
      year,
      plate_number,
      color,
      mileage,
      price,
      status,
      image,
      steering_position,
      carry_capacity,
      transmission,
      fuel_type,
      build_type,
      engine_power,
    } = req.body;

    const newCar = await car_service.createCar(
      vehicle_class,
      model,
      year,
      plate_number,
      color,
      mileage,
      price,
      status,
      image,
      steering_position,
      carry_capacity,
      transmission,
      fuel_type,
      build_type,
      engine_power
    );

    res.status(201).json({
      success: true,
      message: "Car created successfully",
      payload: newCar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteCarById = async (req, res) => {
  const carId = req.params.id;
  try {
    const car = await car_service.deleteCar(carId);
    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getCarById = async (req, res) => {
  const carId = req.params.id;
  try {
    const car = await car_service.getCar(carId);
    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateCarById = async (req, res) => {
    const carId = req.params.id;
    const updatedData = req.body
  try {
    const updatedCar = await car_service.updateCarById(carId,updatedData)
    // console.log("updatedCar ====>",updatedCar)
    if (updatedCar.success) {
        res.status(200).json(updatedCar.payload);
      } else {
        res.status(404).json({ success: false, message: result.message });
      }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getAllCars,
  createCar,
  deleteCarById,
  getCarById,
  updateCarById,
};
