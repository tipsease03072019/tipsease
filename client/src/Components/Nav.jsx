import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  const toggleNav = () => {
    console.log("The dropdown is supposed to come down now");
  };
  return (
    <>
      <button onClick={() => toggleNav()}>Profile</button>
      <nav>
        {/* Need To Add Route */}
        <Link to="/">Profile</Link>
        <Link to="/">Help</Link>
        <Link to="/">Settings</Link>
        <Link to="/">Sign Out</Link>
      </nav>
    </>
  );
};
export default Nav;
