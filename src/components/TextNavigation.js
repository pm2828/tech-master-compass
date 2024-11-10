import React from 'react';
import { Link } from 'react-router-dom';
import './TextNavigation.css';

const TextNavigation = () => {
  return (
    <div className="text-navigation">
      <ul>
        <li><Link to="/">Astra</Link></li>
        <li><Link to="/">AHC</Link></li>
        <li><Link to="/">RMD</Link></li>
        <li><Link to="/">Associate</Link></li>
        <li><Link to="/">ACART</Link></li>
        <li><Link to="/">AISHA</Link></li>
        <li><Link to="/">FAA1</Link></li>
        <li><Link to="/">Key Vault</Link></li>
        <li><Link to="/">User Roles</Link></li>
      </ul>
    </div>
  );
};

export default TextNavigation;
