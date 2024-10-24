import { useNavigate } from "react-router-dom";
import "./productsList.scss";

const ProductsList = ({ products = [], addToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Điều hướng đến trang chi tiết sản phẩm dựa trên id
    navigate(`/FashionShopV2/products/${productId}`);
  };

  return (
    <div className="products-list">
      {products.map((product) => (
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
                {/* Chuyển đến trang chi tiết sản phẩm */}
                <button onClick={() => handleProductClick(product.id)}>
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
