// import React from 'react';
import "./productsList.scss";

const ProductsList = ({ products = [], onProductClick, addToCart }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        // card
        <div key={product.id} className="container_card">
          <div className="card">
            <div className="imgBx">
              <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="contentBx">
              <h5>{product.name}</h5>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="price">
                <p>{product.price} VNĐ</p>
              </div>
              <div className="btn">
                <button onClick={() => onProductClick(product)}>
                  Chi tiết
                </button>
                <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
