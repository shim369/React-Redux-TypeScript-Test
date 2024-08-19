import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import "../../App.css";
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        <Link to="/">
          <IconButton aria-label="Home">
            <HomeIcon />
          </IconButton>
        </Link>
        {!isAuthenticated && (
          <>
            <Link to="/login">
              <IconButton aria-label="Login">
                <LoginIcon />
              </IconButton>
            </Link>
            <Link to="/register">
              <IconButton aria-label="Register">
                <PersonAddIcon />
              </IconButton>
            </Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <Link to="/profile">
              <IconButton aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <Link to="/logout">
              <IconButton aria-label="Logout" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
