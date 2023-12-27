const uuid = require("uuid");
module.exports = (sequelize, Sequelize) => {
  const userType = sequelize.define(
    "userType",
    {
      userTypeId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      plan_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
  return userType;
};
