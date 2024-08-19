import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <aside className='aside'>
      <ul className='aside_list'>
        {user && (
          <li className='aside_list_item'>
            <Link to={`/dashboard/${user.id}`}>Dashboard</Link>
          </li>
        )}
        <li className='aside_list_item'><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
