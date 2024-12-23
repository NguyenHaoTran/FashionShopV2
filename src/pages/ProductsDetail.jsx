import { useParams } from "react-router-dom";
import productsData from "../Data/products.json";
import "./productsDetail.scss";
import useCart from "../components/cart/useCart";

const ProductsDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams(); // Lấy id từ URL
  const product = productsData.find((p) => p.id === parseInt(id)); // Tìm sản phẩm dựa trên id

  if (!product) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  return (
    <div className="product-detail">
      <div className="productDetail-item">
        <h1>{product.name}</h1>
        <div className="imgs">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="des">
          <b>Giá: {product.price} VNĐ</b>
          <p>{product.description}</p>
        </div>
        <div className="productDetail_btn">
          <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
        </div>
      </div>

      {/* Các thông tin khác về sản phẩm */}
    </div>
  );
};

export default ProductsDetail;
