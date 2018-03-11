const express = require('express');
const app = express();
const path = require('path');
const db = require('./db')
const User = require('./db/User.js')

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

app.use(require('body-parser').json());

app.get('/api/users', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
})

app.get('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/users', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
});

app.delete('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.put('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`** Listening on Port ${port}**`));

db.sync()
  .then(() => {
    db.seed();
  })
