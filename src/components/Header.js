import React from 'react';
import '../styles/header.css';

const Header = ({ handleRouteChange }) => {
  const handleNavigation = (route) => {
    handleRouteChange(route);
  };

  return (
    <header>
      <div className="header">
        <ul>
          <li>
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about')}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/portfolio')}>Portfolio</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
