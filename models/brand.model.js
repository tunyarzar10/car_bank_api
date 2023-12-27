const uuid = require("uuid");
module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define(
    "brand",
    {
      brandId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      brand: {
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
    },
    { timestamps: true }
  );
  return Brand;
};
