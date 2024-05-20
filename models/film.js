'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    release_year: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER,
    rental_duration: DataTypes.INTEGER,
    rental_rate: DataTypes.FLOAT,
    length: DataTypes.INTEGER,
    replacement_cost: DataTypes.FLOAT,
    rating: DataTypes.STRING,
    last_update: DataTypes.DATE,
    special_features: DataTypes.TEXT,
    fulltext: DataTypes.TSVECTOR
  }, {});
  Film.associate = function(models) {
    // associations can be defined here
  };
  return Film;
};
