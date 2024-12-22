import React from 'react';
import './Sidebar.css';
import Logo from "/LogOut.svg";
import LogoTo from "/Dolist.svg";
import LogoCa from "/Calendar.svg";
import LogoRe from "/EditFile.svg";
import LogoEn from "/XI.png";
import LogNa from "/Name.svg";
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">

        <h4>XI Company</h4>
      </div>
      <ul className="sidebar-menu">
        <Link to="/tasks">
        <li className="menu-item ">
          <span className="menu-icon">
          <img src={LogoTo} alt = "Dolist" />
          </span>
          Tasks
        </li>
        </Link>
      <Link to={"/calendar"}> 
       <li className="menu-item">
          <span className="menu-icon">
            <img src = {LogoCa} alt = "Calendar" />
          </span>
          Calendar
        </li>
        </Link>
        <Link to={"/vacation"}> 
        <li className="menu-item">
          <span className="menu-icon">

          <img src={LogoRe} alt = "EditFile" />
          </span>
          Vacation
        </li>
        </Link>
      </ul>
      <div className="sidebar-footer">
        <Link to={"/profile"}>
        <div className="menu-item">
          <span className="menu-icon">
          <img src={LogNa} alt = " Name" />
          </span>
              Profile
              </div>
        </div>
        <div className="menu-item">
          <span className="menu-icon">
            <img src={Logo} alt = "LogOut" />
          </span>
          LogOut
        </div>
      </div>
    </div>
  );
};

export default Sidebar;