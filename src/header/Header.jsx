import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav.jsx";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // scroll_hide
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  // 

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
        <div className="logo">LOGO</div>
        <Nav isOpen={isOpen} />
        <button className="nemu_toggle" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
        </button>       
    </header>
  )
};

export default Header;
