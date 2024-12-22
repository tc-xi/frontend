import React , { useState }from "react";
import "./Login.css";
import Logo from "/XI.png";
import UserLogo from "/user.svg";
import LockLogo from "/lock.svg";
import eyeIcon from "/Eye.svg";
import hideIcon from "/Hide.svg";
import { Link } from "react-router";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPsw = () => {
        setShowPassword((prevState) => !prevState);
    }



  return (
    <div className="app-container">
        <div className="login-card">
      {/* Logo */}
      <img
        src={Logo}// Replace with your logo URL
        alt="Logo"
        className="login-logo"
      />

      {/* Title */}
      <h1 className="text-welcome">Welcome to <span className="text-yellow">XI Company</span></h1>

      {/* Form */}
      <form className="login-form">
        <div className="input-group">
          <img src={UserLogo} alt="User" className="usericon" />
          <input
            type="email"
            placeholder="EMAIL"
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
        <img src={LockLogo} alt="lock" className="usericon" />
        {showPassword ?(<img src={eyeIcon} alt="eye" className="eyelock" onClick={handleShowPsw} />) :
        (<img src={hideIcon} alt="eye" className="eyelock" onClick={handleShowPsw} />)}
        

          
          <input
            type={showPassword ? "text" : "password"}
            placeholder="PASSWORD"
            className="input-field"
            required
          />

        </div>

        {/* Submit Button */}
       <Link to={"/tasks"}> 
       <button type="submit" className="login-button">
          LOGIN
        </button>
        </Link>
      </form>

     
    </div>
    {/* Footer */}
    <footer className="footer">
        © 2024 XI. All Rights Reserved.
      </footer>
    </div>
    
  );
};

export default Login;

