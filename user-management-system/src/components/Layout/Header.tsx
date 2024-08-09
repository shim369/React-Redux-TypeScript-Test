import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import "../../App.css"

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className='header'>
      <h1>My App</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
