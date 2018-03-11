const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_crud_react_1_db');

module.exports = {
  Sequelize,
  _conn
}
