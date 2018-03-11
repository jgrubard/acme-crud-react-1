const { _conn } = require('./conn.js');
const User = require('./User.js');

const sync = () => {
  return _conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    User.create({ name: 'Mario'}),
    User.create({ name: 'Luigi'}),
    User.create({ name: 'Bowser'})
  ])
}

module.exports = {
  sync,
  seed
}
