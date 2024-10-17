import React from "react";
import "./cart.scss";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <div className="cart-item">
                <img src={item.imgUrl} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>{item.price} VNĐ</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Xóa</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
