import { useState, useCallback, useEffect } from "react";
import ProductsList from "./ProductsList";
import ProductsDetail from "./ProductsDetail";
import FilterBar from "./FilterBar";
// import Cart from "../../components/header/cart/Cart.jsx";
import productsData from "../Data/products.json";
import "./products.scss";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Effect để thêm hoặc gỡ lớp no-scroll khi modal mở ra
  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function để gỡ lớp khi component bị hủy
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProduct]);

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
        {/* <div className="cart">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
       */}
        {/* detail_popup */}
        {selectedProduct && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Để ngăn chặn sự kiện click đóng popup khi click vào bên trong modal
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
