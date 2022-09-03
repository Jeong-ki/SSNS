const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // MEMO: 배포할땐 production으로 변경
const config = require('../config/config')[env];
const db = {};

// sequelize가 node와 mysql을 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
