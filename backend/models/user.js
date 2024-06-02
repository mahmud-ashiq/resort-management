module.exports = (sequelize, DataTypes) => {

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

return User;
}