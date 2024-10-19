import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav.jsx";
import "./header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Search from "../header/search/Search.jsx";
import Cart from "../components/cart/Cart.jsx"; // Import component Cart

const Header = ({ cartItems, updateCartItem, removeCartItem, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State để mở/đóng giỏ hàng
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
        <div className="tools">
          <button className="cart-btn" onClick={toggleCart}>
            <i className="ri-shopping-cart-2-line"></i>
             {/* ({cartItems.length}) */}
          </button>
        </div>
      </header>
    {/* cart popup */}
      {isCartOpen && (
        <div className="cart-popup">
          <div className="cart-overlay" onClick={toggleCart}></div>
          <div className="cart-content">
            <Cart
              cartItems={cartItems}
              updateCartItem={updateCartItem}
              removeCartItem={removeCartItem}
              clearCart={clearCart}
            />
            <button className="close-cart" onClick={toggleCart}>
              Đóng Giỏ Hàng
            </button>
          </div>
        </div>
      )}

      <Search isVisible={isSearchVisible} onClose={closeSearch} />
    </>
  );
};

export default Header;
