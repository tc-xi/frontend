import React from "react";
import "./Navbar.css";
import searchIcon from "../../../public/OIP";
import Img from "/XI.png";

const Navbar = () => {
  return (
    <div className="navbar" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "10px",
    }}>
      
      <div className="navbar-left">
        <img className= "LogoImg" src={Img} alt="XI" style={{
          marginRight: "10px",
        }} />
        <span className="navbar-logo">XI Company</span>
      </div>
      
      <div className="navbar-right" >
        <div className="navbar-search-container"          >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor:"white",
            }}
          >
            <input type="text" className="navbar-search" placeholder="Search" />
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: "100%",
              padding: "0 3px",
            }}>
              <img
                src={searchIcon}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="navbar-profile">
          <img src="/public/Notification.png" style={{
            height: "20px",
            width: "20px",
            
          }} />
          <span className="navbar-username">USER</span>
          <img src="/public/OIP.jpg" style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            marginLeft: "10px",
          }} alt="" srcset="" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;