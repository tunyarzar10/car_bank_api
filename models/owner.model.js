module.exports = (sequelize, Sequelize) => {
  const Owner = sequelize.define(
    "owner",
    {
      owerId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return Owner;
};
