import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className='aside'>
      <ul className='aside_list'>
        {user && (
          <li className='aside_list_item'>
            <Link to="/dashboard" className={isActive('/dashboard') ? 'open' : ''}>
              Dashboard
            </Link>
          </li>
        )}
        <li className='aside_list_item'>
          <Link to="/settings" className={isActive('/settings') ? 'open' : ''}>
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
