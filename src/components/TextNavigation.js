import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TextNavigation.css';

const TextNavigation = () => {
  const [showAishaSubList, setShowAishaSubList] = useState(false);
  const [showFaa1SubList, setShowFaa1SubList] = useState(false);

  const toggleAishaSubList = () => {
    setShowAishaSubList(!showAishaSubList);
  };

  const toggleFaa1SubList = () => {
    setShowFaa1SubList(!showFaa1SubList);
  };

  return (
    <div className="text-navigation">
      <ul>
        <li><Link to="/">Astra</Link></li>
        <li><Link to="/">AHC</Link></li>
        <li><Link to="/">RMD</Link></li>
        <li><Link to="/">Associate</Link></li>
        <li><Link to="/">ACART</Link></li>

        {/* AISHA with sub-list */}
        <li>
          <div className="dropdown">
            <button onClick={toggleAishaSubList} className="dropdown-button">
              AISHA
              <FaChevronDown className="dropdown-icon" />
            </button>
          </div>
          {showAishaSubList && (
            <ul className="sub-list">
              <li><Link to="/aisha/dashboard">Dashboard</Link></li>
              <li><Link to="/aisha/tickets">Tickets</Link></li>
              <li><Link to="/aisha/trends">Trends</Link></li>
              <li><Link to="/aisha/user-view">User View</Link></li>
              <li><Link to="/aisha/ticket-handling">Ticket Handling</Link></li>
            </ul>
          )}
        </li>

        {/* FAA1 with sub-list */}
        <li>
          <div className="dropdown">
            <button onClick={toggleFaa1SubList} className="dropdown-button">
              FAA1
              <FaChevronDown className="dropdown-icon" />
            </button>
          </div>
          {showFaa1SubList && (
            <ul className="sub-list">
              <li><Link to="/faa1/home">Home</Link></li>
              <li><Link to="/faa1/on-board">ON-Board</Link></li>
              <li><Link to="/faa1/admin">ADMIN</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/">Key Vault</Link></li>
        <li><Link to="/">User Roles</Link></li>
      </ul>
    </div>
  );
};

export default TextNavigation;
