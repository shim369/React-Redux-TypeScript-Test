import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import "../../App.css"
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className='header'>
      <h1>React Redux User Management System</h1>
      <nav>
        <Link to="/login">
        <IconButton>
          <LoginIcon />
        </IconButton>
        </Link>
        <Link to="/register">
        <IconButton>
          <PersonAddIcon />
        </IconButton>
        </Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
