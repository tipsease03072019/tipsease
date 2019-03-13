import React from 'react';
import { NavLink } from "react-router-dom";

const LoginSignupHeader = (props) => {
  return (
    <header>
      <p className="heading">Tipsease</p>
      <nav className="card full-width">
        <NavLink to="/login">
          <button className="transparent login-tab">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="transparent signup-tab">Sign Up</button>
        </NavLink>
      </nav>
    </header>
  )
}

export default LoginSignupHeader;
