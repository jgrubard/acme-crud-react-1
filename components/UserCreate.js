import React, { Component } from 'react';

class UserCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.onSave = this.onSave.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }

  onSave(event) {
    event.preventDefault()
    this.props.onCreateUser({ name: this.state.name })
  }

  onChangeName(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    const { onSave, onChangeName } = this;
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={ onSave }>
          <input value={ name } onChange={ onChangeName } className='form-control'/>
          <button disabled={ !name.length } className='btn btn-primary'>
            Create User
          </button>
        </form>
      </div>
    );
  }
}

export default UserCreate;
