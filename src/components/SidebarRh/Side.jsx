import React from 'react';
import './Side.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
       
        <h4>XI Company</h4>
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">
        <Link to="/employees-list">
          <li className="menu-item">
            <span className="menu-icon">
             
            </span>
            Employees List
          </li>
        </Link>

        <Link to="/tasks-statistics">
          <li className="menu-item">
            <span className="menu-icon">
            
            </span>
            Tasks & Statistics
          </li>
        </Link>

        <Link to="/global-statistics">
          <li className="menu-item">
            <span className="menu-icon">
             
            </span>
            Global Statistics
          </li>
        </Link>

        <Link to="/request">
          <li className="menu-item">
            <span className="menu-icon">
            
            </span>
            Request
          </li>
        </Link>
      </ul>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <Link to="/profile">
          <div className="menu-item">
            <span className="menu-icon">
           
            </span>
            Profile
          </div>
        </Link>
        <div className="menu-item">
          <span className="menu-icon">
         
          </span>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
