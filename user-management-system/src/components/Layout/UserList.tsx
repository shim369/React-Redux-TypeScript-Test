import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUsers } from '../../redux/slices/userSlice';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  

  useEffect(() => {
    if (isDashboard && userId) {
      axios.get(`http://localhost:3000/api/users/${userId}`)
        .then(response => {
          dispatch(setUsers([response.data]));
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    } else {
      axios.get('http://localhost:3000/api/users')
        .then(response => {
          dispatch(setUsers(response.data));
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [dispatch, isDashboard, userId]);

  return (
    <div>
      <h2>User List</h2>
      <table className='tbl'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            {isDashboard && <th>Edit</th>}
            {isDashboard && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className='button-td'>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              {isDashboard && <td className='button-td'><button>Edit</button></td>}
              {isDashboard && <td className='button-td'><button>Delete</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
