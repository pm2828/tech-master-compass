import React from 'react';
import { FaAsterisk, FaCartPlus, FaExclamationTriangle, FaFlag, FaHospital, FaIndustry, FaKey, FaMailBulk, FaRobot, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li><Link to="/"><FaMailBulk /></Link></li>
        <li><Link to="/"><FaAsterisk /></Link></li>
        <li><Link to="/"><FaHospital /></Link></li>
        <li><Link to="/"><FaIndustry /></Link></li>
        <li><Link to="/"><FaExclamationTriangle /></Link></li>
        <li><Link to="/"><FaCartPlus /></Link></li>
        <li><Link to="/"><FaRobot /></Link></li>
        <li><Link to="/"><FaFlag /></Link></li>
        <li><Link to="/"><FaKey /></Link></li>
        <li><Link to="/"><FaUsers /></Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
