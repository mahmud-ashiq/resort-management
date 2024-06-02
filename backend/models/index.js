const { Sequelize, DataTypes, Model } = require('sequelize');

    const sequelize = new Sequelize('demo', 'postgres', 'ashiq', {
        host: 'localhost',
        dialect:'postgres',
        logging: false
      });

      try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require('./contact')(sequelize,DataTypes,Model)
db.user = require('./user')(sequelize,DataTypes)
db.sequelize.sync();
module.exports = db;
