import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Admin Panel</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
