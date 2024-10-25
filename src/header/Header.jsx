import React, { useState, useEffect, useContext } from "react";
import Nav from "./nav/Nav.jsx";
import "./header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Search from "../header/search/Search.jsx";
import { CartContext } from "../components/cart/CartContext.jsx"; // Import CartContext để sử dụng

const Header = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext); // Lấy dữ liệu và hàm từ CartContext
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
          <button className="search-btn" onClick={openSearch}>
            <SearchOutlinedIcon className="search-icon" />
          </button>
          <button className="cart-btn" onClick={toggleCart}>
            <i className="ri-shopping-cart-2-line"></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
        </div>
      </header>

      {/* cart popup */}
      {/* cart popup */}
      {isCartOpen && (
        <div className={`cart-popup ${isCartOpen ? "show" : ""}`}>
          <div className="cart-overlay" onClick={toggleCart}></div>
          <div className="cart-content">
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-items">
                  {/* Hiển thị ảnh sản phẩm */}
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p>
                      {item.name} - Số lượng: {item.quantity}
                    </p>
                    <div className="cart-item-actions">
                      <button onClick={() => removeFromCart(item.id)}>
                        Xóa
                      </button>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }>
                        +
                      </button>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            <button onClick={clearCart}>Xóa toàn bộ giỏ hàng</button>
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
