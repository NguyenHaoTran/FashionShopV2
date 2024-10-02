import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss"

const Nav = ({isOpen}) => {
  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to ="/">TRANG CHỦ</Link></li>
          <li><Link to="/about">VỀ CHÚNG TÔI</Link></li>
          <li><Link to="/products">SẢN PHẨM</Link></li>
          <li><Link to="/news">TIN TỨC</Link></li>
          <li><Link to="/contacts">LIÊN HỆ</Link></li>        
        </ul>
      </nav>
  )
}

export default Nav