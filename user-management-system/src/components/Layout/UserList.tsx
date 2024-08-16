import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUsers } from '../../redux/slices/userSlice';
import axios from 'axios';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        dispatch(setUsers(response.data));
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      <table className='tbl'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
