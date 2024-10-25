import { useState, useCallback, useEffect, useContext } from "react";
import ProductsList from "./ProductsList";
import FilterBar from "./FilterBar";
import { CartContext } from "../components/cart/CartContext"; // Sử dụng CartContext
import productsData from "../Data/products.json";
import "./products.scss";

const Products = () => {
  const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  const handleFilter = useCallback((filters) => {
    let filtered = productsData;

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.size) {
      filtered = filtered.filter((product) => product.size === filters.size);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, []);

  return (
    <div className="products">
      <div className="banner">
        <div className="selection">
          <a href="/">TRANG CHỦ</a>
          <span>|</span>
          <a href="/products">SẢN PHẨM</a>
        </div>
        <p className="p_banner">SẢN PHẨM</p>
      </div>
      {/*  */}
      <div className="products-section">
        <div className="products-container">
          <div className="filterBar">
            <FilterBar onFilter={handleFilter} />
          </div>
          <div className="listProduct">
            <ProductsList products={filteredProducts} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
