import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss"

const Nav = ({isOpen, toggleMenu}) => {
   const handleMenuItemClick = () => {
    // Đóng menu khi một mục được chọn
    toggleMenu();
   };

  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={handleMenuItemClick}><Link to ="/">TRANG CHỦ</Link></li>
          <li onClick={handleMenuItemClick}><Link to="/about">VỀ CHÚNG TÔI</Link></li>
          <li onClick={handleMenuItemClick}><Link to="/products">SẢN PHẨM</Link></li>
          <li onClick={handleMenuItemClick}><Link to="/news">TIN TỨC</Link></li>
          <li onClick={handleMenuItemClick}><Link to="/contacts">LIÊN HỆ</Link></li>        
        </ul>
      </nav>
  )
}

export default Nav;