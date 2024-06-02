module.exports = (sequelize, DataTypes, Model) => {

class Contact extends Model {}
Contact.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: 'Contact',
    freezeTableName: true,
    timestamps: false
  },
);

// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true
return Contact;
}