import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = ({ isOpen, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuItemClick = () => {
    // Chỉ đóng menu khi ở kích thước mobile
    if (isMobile) {
      toggleMenu();
    }
  };

  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={handleMenuItemClick}><Link to="/FashionShopV2/home">TRANG CHỦ</Link></li>
        <li onClick={handleMenuItemClick}><Link to="/FashionShopV2/about">VỀ CHÚNG TÔI</Link></li>
        <li onClick={handleMenuItemClick}><Link to="/FashionShopV2/products">SẢN PHẨM</Link></li>
        <li onClick={handleMenuItemClick}><Link to="/FashionShopV2/news">TIN TỨC</Link></li>
        <li onClick={handleMenuItemClick}><Link to="/FashionShopV2/contacts">LIÊN HỆ</Link></li>        
      </ul>
    </nav>
  );
};

export default Nav;
