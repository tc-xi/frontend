import React , { useState }from "react";
import "./Login.css";
import Logo from "/XI.png";
import UserLogo from "/user.svg";
import LockLogo from "/lock.svg";
import eyeIcon from "/Eye.svg";
import HideIcon from "/Hide.svg";

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
      <div className="container">
      <span className="welcome-text">Welcome to</span> <span className="company-name">XI Company</span>

      </div>

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
        <img src={LockLogo} alt="lock" className="lockicon" />
        {showPassword ?(<img src={eyeIcon} alt="eye" className="eyelock" onClick={handleShowPsw} />) :
        (<img src={HideIco} alt="eye" className="eyelock" onClick={handleShowPsw} />)}
        

          
          <input
            type={showPassword ? "text" : "password"}
            placeholder="PASSWORD"
            className="input-field"
            required
          />

        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button">
          LOGIN
        </button>
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
