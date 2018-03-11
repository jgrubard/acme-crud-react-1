import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import Users from './Users';
import UserCreate from './UserCreate.js';
import User from './User.js';

const Home = () => (
  <div class='jumbotron'>
    <h4>Click a Tab!</h4>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    this.onCreateUser = this.onCreateUser.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((result) => result.data)
      .then(users => this.setState({ users }))
      .catch(err => console.error(err))
  }

  onCreateUser(user) {
    axios.post('/api/users', user)
      .then(result => result.data)
      .then(user => {
        this.setState({ users: [ ...this.state.users, user ] })
      })
      .then(() => document.location.hash = '/users')
      .catch(err => console.error(err));
  }

  onUpdateUser(user) {
    axios.put(`/api/users/${user.id}`, user)
      .then(result => result.data)
      .then(user => {
        const users = this.state.users.map(_user => {
          if (_user.id === user.id * 1) {
            return user;
          }
          return _user;
        })
        this.setState({ users });
        document.location.hash = '/users'
      })
  }

  onDeleteUser(id) {
    axios.delete(`/api/users/${id}`)
      .then(result => result.data)
      .then(user => {
        const users = this.state.users.filter(_user => {
          return _user.id !== id * 1;
        })
        this.setState({ users });
        document.location.hash = '/users'
      })
  }

  render() {
    const { users } = this.state;
    const { onCreateUser, onUpdateUser, onDeleteUser } = this;
    return (
      <Router>
        <div>
          <h1>Acme Users CRUD React</h1>
            <Route render={ ({ location }) => <Nav path={ location.pathname } users={ users } /> } />
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/users' render={ () => <Users users={users} /> } />
              <Route exact path='/users/create' render={ () => <UserCreate onCreateUser={ onCreateUser } />} />
              <Route exact path='/users/:id' render={ ({ match }) => <User users={ users } id={ match.params.id } onUpdateUser={ onUpdateUser } onDeleteUser={ onDeleteUser } /> } />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
