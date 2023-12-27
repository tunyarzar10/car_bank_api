const { DataTypes } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define(
    "cars",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      // carId: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      vehicle_class: {
        type: Sequelize.STRING,
        defaultValue:null,
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING,
        defaultValue:null,

        allowNull: true,
      },
      year: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      plate_number: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      mileage: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      steering_position: {
        type: Sequelize.BOOLEAN,
        defaultValue: null,
        allowNull: true,
      },
      carry_capacity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transmission: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      fuel_type: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      build_type: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      engine_power: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
  Car.beforeCreate((car) => (car.id = uuid.v4()));
  return Car;
};
