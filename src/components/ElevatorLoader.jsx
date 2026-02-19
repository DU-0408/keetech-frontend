import React, { useState, useEffect, useCallback } from 'react';

const ElevatorLoader = ({ onLoadingComplete }) => {
  const [activeFloor, setActiveFloor] = useState(1);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [hideControls, setHideControls] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const totalFloors = 11;

  // Sequential floor lighting animation
  useEffect(() => {
    if (activeFloor > totalFloors) return;

    const delay = activeFloor === 1 ? 600 : activeFloor <= 3 ? 350 : activeFloor <= 8 ? 280 : 350;

    const timer = setTimeout(() => {
      if (activeFloor < totalFloors) {
        setActiveFloor(prev => prev + 1);
      } else {
        // Reached top floor — hide controls, then open doors
        setHideControls(true);
        setTimeout(() => setDoorsOpen(true), 400);
        setTimeout(() => setIsExiting(true), 1400);
        setTimeout(() => onLoadingComplete(), 2100);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeFloor, onLoadingComplete]);

  // Floor buttons for the COP (Car Operating Panel)
  const floors = Array.from({ length: totalFloors }, (_, i) => i + 1);

  return (
    <div className={`el-loader ${isExiting ? 'el-loader--exit' : ''}`}>
      {/* Ambient light effect */}
      <div className="el-loader__ambient" />

      {/* Main elevator scene */}
      <div className="el-loader__scene">
        {/* Elevator door frame */}
        <div className="el-door-frame">
          {/* Floor indicator above door */}
          <div className={`el-door-frame__indicator ${hideControls ? 'el-door-frame__indicator--hide' : ''}`}>
            <div className="el-door-frame__indicator-display">
              <span className={`el-door-frame__arrow ${activeFloor >= totalFloors ? 'el-door-frame__arrow--arrived' : ''}`}>
                {activeFloor < totalFloors ? '▲' : '●'}
              </span>
              <span className="el-door-frame__floor-num">{activeFloor}</span>
            </div>
          </div>

          {/* The doors */}
          <div className="el-doors">
            <div className={`el-door el-door--left ${doorsOpen ? 'el-door--open' : ''}`}>
              {/* Frosted glass effect */}
              <div className="el-door__glass">
                <div className="el-door__frost" />
                <div className="el-door__reflection" />
              </div>
              {/* Welcome text (left half) */}
              <div className="el-door__text el-door__text--left">
                <span>Welcome to KEE</span>
              </div>
              {/* Door handle */}
              <div className="el-door__handle" />
            </div>
            <div className={`el-door el-door--right ${doorsOpen ? 'el-door--open' : ''}`}>
              <div className="el-door__glass">
                <div className="el-door__frost" />
                <div className="el-door__reflection" />
              </div>
              {/* Welcome text (right half — after the hyphen) */}
              <div className="el-door__text el-door__text--right">
                <span>Tech Elevators</span>
              </div>
              <div className="el-door__handle" />
            </div>
            {/* Center seam line */}
            <div className="el-doors__seam" />
          </div>
        </div>

        {/* Car Operating Panel (COP) */}
        <div className={`el-cop ${hideControls ? 'el-cop--hide' : ''}`}>
          <div className="el-cop__panel">
            {/* Floor buttons - arranged bottom to top */}
            <div className="el-cop__buttons">
              {floors.slice().reverse().map(floor => (
                <button
                  key={floor}
                  className={`el-cop__btn ${
                    floor <= activeFloor ? 'el-cop__btn--active' : ''
                  } ${floor === activeFloor ? 'el-cop__btn--current' : ''}`}
                  aria-label={`Floor ${floor}`}
                >
                  <span className="el-cop__btn-num">{floor}</span>
                  <span className="el-cop__btn-glow" />
                </button>
              ))}
            </div>

            {/* Emergency buttons at bottom */}
            <div className="el-cop__emergency">
              <div className="el-cop__emergency-btn el-cop__emergency-btn--alarm">
                <span>🔔</span>
              </div>
              <div className="el-cop__emergency-btn el-cop__emergency-btn--door">
                <span>◁▷</span>
              </div>
            </div>

            {/* Brand label */}
            <div className="el-cop__brand">
              <img 
                src="/Logo.png" 
                alt="KEE-Tech Elevators" 
                className="el-cop__brand-logo logo-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorLoader;
