import { useState, useCallback, useEffect } from "react";
import ProductsList from "./ProductsList";
import ProductsDetail from "./ProductsDetail";
import FilterBar from "./FilterBar";
import Cart from "../components/cart/Cart";
import productsData from "../Data/products.json";
import "./products.scss";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleFilter = useCallback((filters) => {
    let filtered = productsData;

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.size) {
      filtered = filtered.filter((product) => product.size === filters.size);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProduct]);

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="banner">
        <div className="selection">
          <a href="/">TRANG CHỦ</a>
          <span>|</span>
          <a href="/products">SẢN PHẨM</a>
        </div>
        <p className="p_banner">SẢN PHẨM</p>
      </div>
      <div className="products-container">
        <div className="filterBar">
          <FilterBar onFilter={handleFilter} />
        </div>
        <div className="products-content">
          <ProductsList
            products={filteredProducts || []}
            onProductClick={setSelectedProduct}
            addToCart={addToCart}
          />
        </div>
        <button className="cart-button" onClick={toggleCart}>
          Mở Giỏ Hàng
        </button>
        {isCartOpen && (
          <div className="cart-popup">
            <div className="cart-overlay" onClick={toggleCart}></div>
            <div className="cart-content">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              <button className="close-cart" onClick={toggleCart}>
                Đóng Giỏ Hàng
              </button>
            </div>
          </div>
        )}
        {selectedProduct && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <ProductsDetail
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                addToCart={addToCart}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
