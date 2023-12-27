const db = require("../models");
const uuid = require("uuid");
const { Car } = require("../models");
const { QueryTypes, sequelize } = require("sequelize");
const getCars = async () => {
  try {
    const queryStr = `
    SELECT * FROM car_bank_api.cars`;

    const cars = await db.sequelize.query(queryStr, {
      type: QueryTypes.SELECT,
    });

    let response = [];
    cars.forEach((car) => {
      const {
        id,
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
      } = car;

      const data = {
        id,
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
      };

      response.push(data);
    });

    return response;
  } catch (err) {
    console.error(err);
    return { success: false, message: err.message };
  }
};

const createCar = async (
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
) => {
  try {
    const newCar = await db.Car.create({
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
    });

    return newCar;
  } catch (err) {
    console.error(err);
    return { success: false, message: err.message };
  }
};

const deleteCar = async (carId) => {
  try {
    const existingCar = await db.Car.findByPk(carId);
    if (!existingCar) {
      return { success: false, message: "Car not found" };
    }

    const deleteQuery = `DELETE FROM car_bank_api.cars WHERE id = :carId`;

    await db.sequelize.query(deleteQuery, {
      replacements: { carId },
      type: QueryTypes.DELETE,
    });

    return { success: true, message: "Car deleted successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const getCar = async (carId) => {
  try {
    const car = await Car.findOne({
      where: { id: carId },
    });

    if (car) {
      return { success: true, payload: car };
    } else {
      return { success: false, message: "Car not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const updateCarById = async (carId, updatedData) => {
  try {
    const updatedCar = await db.Car.update(updatedData, {
      where: { id: carId },
    });
    // console.log("updatedCar ====>",updatedCar)

    if (updatedCar[0] === 1) {
      const updatedCarData = await db.Car.findByPk(carId);
      return { success: true, payload: updatedCarData };
    } else {
      return { success: false, message: "Car not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  getCars,
  createCar,
  deleteCar,
  getCar,
  updateCarById,
};
