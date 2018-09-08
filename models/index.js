'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize('postgres://wmdkodfwiddtnt:8fbc7da4a466a18b27b8a38ebb5a895cb932e51a3b976f367996a593b8f3abe3@ec2-50-16-196-138.compute-1.amazonaws.com:5432/dc7lk692rapvqn');
} else {
  sequelize = new Sequelize('postgres://wmdkodfwiddtnt:8fbc7da4a466a18b27b8a38ebb5a895cb932e51a3b976f367996a593b8f3abe3@ec2-50-16-196-138.compute-1.amazonaws.com:5432/dc7lk692rapvqn');
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
