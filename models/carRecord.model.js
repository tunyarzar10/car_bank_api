module.exports = (sequelize, Sequelize) => {
  const carRecord = sequelize.define(
    "carRecord",
    {
      carRecordId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return carRecord;
};
