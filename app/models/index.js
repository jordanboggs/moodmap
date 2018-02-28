const fs        = require('fs'),
      path      = require('path'),
      Sequelize = require('sequelize'),
      env       = process.env.NODE_ENV || "development",
      config    = require(path.join(__dirname, '../../config/config.json'))[env],
      sequelize = new Sequelize(config.database, config.username, 
                                config.password, config),
      db        = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file != "index.js"))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
