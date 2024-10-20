import "./search.scss";
import { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Search = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch dữ liệu từ data.json
    fetch(
      "https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/src/Data/products.json"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={`search-modal ${isVisible ? "visible" : "hidden"}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="search-box">
          <div className="input">
            <input
              type="text"
              placeholder="Tìm kiếm ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchOutlinedIcon className="search-icon" />
          </div>
          <div className="results">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product.id)}>
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="product-image"
                />
                {product.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
