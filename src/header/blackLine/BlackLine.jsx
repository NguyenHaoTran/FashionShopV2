import "./blackLine.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const BlackLine = () => {
  return (
    <div className="container">
      <div className="account">
        {/*  */}
        <Link to="/FashionShopV2/userprofile">   
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/avt.jpg"
              alt="Avatar"
            />       
        </Link>
        <Link to="/FashionShopV2/account">Tài khoản</Link>
      </div>
      <div className="blackLine_text">
        <p>
          Chương trình giảm giá theo mùa đã bắt đầu! Giảm tới 50%!{" "}
          <Link to="/FashionShopV2/products">Mua ngay</Link>
        </p>
      </div>
      <div className="language">
        <div className="items">
          <div className="vn">
            <p>Việt Nam</p>
            <span className="lg-span">
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackLine;
