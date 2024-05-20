module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {
    tableName: 'Actors', 
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return Actor;
};


