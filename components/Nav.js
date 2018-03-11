import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { users, path } = props;
  return (
    <div>
      <ul className='nav'>
        <li className='nav-item'>
          {
            path === '/' ? (
              <span className='nav-link disabled'>Home</span>
            ) : (
              <Link to='/' className='nav-link'>Home</Link>
            )
          }
        </li>
        <li className='nav-item'>
          {
            path === '/users' ? (
              <span className='nav-link disabled'>
                Users &nbsp;
                <span className='badge badge-primary'>
                  {users.length}
                </span>
              </span>
            ) : (
              <Link to='/users' className='nav-link'>
                Users &nbsp;
                <span className='badge badge-primary'>
                  {users.length}
                </span>
              </Link>
            )
          }
        </li>
        <li className='nav-item'>
          {
            path === '/users/create' ? (
              <span className='nav-link disabled'>Create New User</span>
            ) : (
              <Link to='/users/create' className='nav-link'>Create New User</Link>
            )
          }
        </li>
      </ul>
    </div>
  );
}

export default Nav;
