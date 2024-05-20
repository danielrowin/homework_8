'use strict';
module.exports = (sequelize, DataTypes) => {
  const FilmCategory = sequelize.define('FilmCategory', {
    film_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {});
  FilmCategory.associate = function(models) {
    // associations can be defined here
  };
  return FilmCategory;
};
