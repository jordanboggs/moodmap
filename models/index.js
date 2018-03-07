const fs        = require('fs'),
      path      = require('path'),
      Sequelize = require('sequelize'),
      env       = process.env.NODE_ENV || "development",
      config    = require(path.join(__dirname, '../config/config.json'))[env],
      sequelize = new Sequelize(config.database, config.username, 
                                config.password, config),
      db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  }) 
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
