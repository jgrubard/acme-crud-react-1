import React from 'react';
import { Link } from 'react-router-dom'

const Users = (props) => {
  const { users } = props;
  return (
    <div>
      <ul className='list-group'>
        {
          users.map(user => (
            <li key={user.id} className='list-group-item'>
              <Link to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}


export default Users;
