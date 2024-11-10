import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
        <Link to="/compass">Compass</Link>
        <Link to="/outage-oracle">Outage Oracle</Link>
        <Link to="/data-table">Data Table</Link>
        <Link to="/navigation">Navigation</Link>
      </div>
    </div>
  );
}

export default Sidebar;
