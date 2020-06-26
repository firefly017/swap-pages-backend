'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    name: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
  };
  return genre;
};