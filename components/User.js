import React, { Component } from 'react'

class User extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.setUser = this.setUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  setUser(users, id) {
    const user = users.find(user => user.id === id * 1);
    if (user) {
      this.setState({ name: user.name });
    }
  }

  componentDidMount() {
    this.setUser(this.props.users, this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setUser(nextProps.users, nextProps.id)
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  updateUser(event) {
    event.preventDefault();
    this.props.onUpdateUser({ id: this.props.id, name: this.state.name });
  }

  render() {
    const { onChangeName, updateUser } = this;
    const { onDeleteUser, id } = this.props;
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={ updateUser }>
          <input value={ name } onChange={ onChangeName } className='form-control' />
          <button className='btn btn-success'>Update User</button>
        </form>
        <button onClick={ () => onDeleteUser(id) } className='btn btn-danger'>Delete User</button>
      </div>
    );
  }
}

export default User;
