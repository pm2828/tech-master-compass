import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Compass from './components/Compass';
import Navigation from './components/Navigation';
import TextNavigation from './components/TextNavigation';

function App() {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <Router>
      <div className="app">
        <button className="menu-button" onClick={toggleNavigation}>☰</button>
        <div className="main-layout">
          {showNavigation ? (
            <div className="navigation">
              <Navigation /> {/* Shows icons when menu is clicked */}
            </div>
          ) : (
            <div className="text-navigation">
              <TextNavigation /> {/* Shows text-only links at startup */}
            </div>
          )}
          <div className={`content ${showNavigation ? 'with-sidebar' : ''}`}>
            <Routes>
              <Route path="/" element={<Compass />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
