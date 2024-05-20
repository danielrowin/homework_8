'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
