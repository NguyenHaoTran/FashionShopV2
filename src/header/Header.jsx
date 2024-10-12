import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav.jsx";
import "./header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Search from "../header/search/Search.jsx"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // scroll_hide
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isSearchVisible, setSearchVisible] = useState(false);

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

    const openSearch = () => setSearchVisible(true);
  const closeSearch = () => setSearchVisible(false);

  return (
    <>
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <div className="logo">LOGO</div>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
      <button className="menu_toggle" onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </button> 
      {/* <div className="tools">
        <button className="search-btn" onClick={openSearch}>
            <SearchOutlinedIcon className="search-icon" />
            <Search />
        </button>
      </div>       */}
    </header>
    <Search isVisible={isSearchVisible} onClose={closeSearch} />
    </>
  );
};

export default Header;
