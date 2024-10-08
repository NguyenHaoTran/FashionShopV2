// import React from 'react';
// Cart-chatGPT
import './cart.scss';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imgUrl} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.price} VNĐ</p>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
