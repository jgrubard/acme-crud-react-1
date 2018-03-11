const { Sequelize, _conn } = require('./conn.js');

const User = _conn.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = User;
