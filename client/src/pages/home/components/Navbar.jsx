import React from "react";
import logo from "./../../../assets/logo.jpg";
import NavbarControls from "./NavbarControls";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar py-4 hidden lg:block ">
      <div className="wrapper">
        <div className="navbar-container relative flex justify-between items-center ">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>

            <NavbarLinks/>
            <NavbarControls/>
     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
