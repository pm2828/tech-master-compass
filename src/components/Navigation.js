import React, { useState } from 'react';
import {
  FaAsterisk, FaCartPlus,
  FaChartLine,
  FaChevronDown,
  FaClipboard,
  FaCog,
  FaExclamationTriangle, FaFlag,
  FaHome,
  FaHospital,
  FaIndustry, FaKey, FaMailBulk, FaRobot,
  FaTachometerAlt,
  FaTicketAlt,
  FaUser,
  FaUserPlus,
  FaUsers
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TextNavigation.css';

const TextNavigation = () => {
  const [showRobotSubList, setShowRobotSubList] = useState(false);
  const [showFlagSubList, setShowFlagSubList] = useState(false);

  const toggleRobotSubList = () => setShowRobotSubList((prev) => !prev);
  const toggleFlagSubList = () => setShowFlagSubList((prev) => !prev);

  return (
    <div className="text-navigation">
      <ul>
        <li><Link to="/"><FaMailBulk className="icon" /></Link></li>
        <li><Link to="/"><FaAsterisk className="icon" /></Link></li>
        <li><Link to="/"><FaHospital className="icon" /></Link></li>
        <li><Link to="/"><FaIndustry className="icon" /></Link></li>
        <li><Link to="/"><FaExclamationTriangle className="icon" /></Link></li>
        <li><Link to="/"><FaCartPlus className="icon" /></Link></li>
        
        {/* FaRobot with inline dropdown */}
        <li className="inline-dropdown">
          <button
            className="dropdown"
            aria-haspopup="true"
            aria-expanded={showRobotSubList}
            onClick={toggleRobotSubList}
          >
            <FaRobot className="icon" />
            <FaChevronDown className="dropdown-icon" />
          </button>
          {showRobotSubList && (
            <ul className="inline-sub-list">
              <li><Link to="/robot/dashboard"><FaTachometerAlt className="icon" /></Link></li>
              <li><Link to="/robot/tickets"><FaTicketAlt className="icon" /></Link></li>
              <li><Link to="/robot/trends"><FaChartLine className="icon" /></Link></li>
              <li><Link to="/robot/user-view"><FaUser className="icon" /></Link></li>
              <li><Link to="/robot/ticket-handling"><FaClipboard className="icon" /></Link></li>
            </ul>
          )}
        </li>

        {/* FaFlag with inline dropdown */}
        <li className="inline-dropdown">
          <button
            className="dropdown"
            aria-haspopup="true"
            aria-expanded={showFlagSubList}
            onClick={toggleFlagSubList}
          >
            <FaFlag className="icon" />
            <FaChevronDown className="dropdown-icon" />
          </button>
          {showFlagSubList && (
            <ul className="inline-sub-list">
              <li><Link to="/flag/home"><FaHome className="icon" /></Link></li>
              <li><Link to="/flag/on-board"><FaUserPlus className="icon" /></Link></li>
              <li><Link to="/flag/admin"><FaCog className="icon" /></Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/"><FaKey className="icon" /></Link></li>
        <li><Link to="/"><FaUsers className="icon" /></Link></li>
      </ul>
    </div>
  );
};

export default TextNavigation;
