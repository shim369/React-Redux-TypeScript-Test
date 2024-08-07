import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        {/* 他のリンクやコンテンツをここに追加 */}
      </ul>
    </aside>
  );
};

export default Sidebar;
