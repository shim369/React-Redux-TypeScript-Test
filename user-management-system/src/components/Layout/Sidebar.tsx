import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className='aside'>
      <ul className='aside_list'>
        <li className='aside_list_item'><Link to="/dashboard">Dashboard</Link></li>
        <li className='aside_list_item'><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
