import React, { useState } from "react";
import Nav from "./nav/Nav.jsx";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
        <div className="logo">LOGO</div>
        <Nav isOpen={isOpen} />
        <button className="nemu_toggle" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
        </button>       
    </header>
  )
};

export default Header;
