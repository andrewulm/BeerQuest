module.exports = function(sequelize, DataTypes) {
  const Reviews = sequelize.define('Reviews', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
  return Reviews;
};
