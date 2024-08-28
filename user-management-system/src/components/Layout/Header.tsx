import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import "../../App.css";
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const drawer = (
    <div>
      <List>
        <ListItem component={Link} to="/">
          <IconButton aria-label="Home">
            <HomeIcon />
            <ListItemText primary="Home" />
          </IconButton>
        </ListItem>
        {!isAuthenticated && (
          <>
            <ListItem component={Link} to="/login">
              <IconButton aria-label="Login">
                <LoginIcon />
                <ListItemText primary="Login" />
              </IconButton>
            </ListItem>
            <ListItem component={Link} to="/register">
              <IconButton aria-label="Register">
                <PersonAddIcon />
                <ListItemText primary="Register" />
              </IconButton>
            </ListItem>
          </>
        )}
        {isAuthenticated && (
          <>
          <ListItem onClick={handleLogout}>
            <IconButton aria-label="Logout" onClick={handleLogout}>
              <LogoutIcon />
              <ListItemText primary="Logout" />
            </IconButton>
          </ListItem>
          <ListItem component={Link} to="/dashboard">
            <IconButton aria-label="dashboard">
              <DashboardIcon />
              <ListItemText primary="Dashboard" />
            </IconButton>
          </ListItem>
          </>
        )}
        <ListItem component={Link} to="/settings">
          <IconButton aria-label="Settings">
            <SettingsIcon />
            <ListItemText primary="Settings" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <header className='header'>
      <h1><Link to="/">User Management System</Link></h1>
      <nav>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            className: 'custom-drawer-paper',
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
