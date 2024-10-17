import "./home.scss";
// import ProductsList from "../products/ProductsList";
import productsData from "../Data/products.json";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import InstagramIcon from "@mui/icons-material/Instagram";

import ScrollReveal from "scrollreveal";

import { useEffect, useState } from "react";

const Home = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate("/FashionShopV2/products"); 
  };

  useEffect(() => {
    // 'isBestSeller'
    const bestSellers = productsData.filter((product) => product.isBestSeller);
    setBestSellingProducts(bestSellers);
    // ScrollReveal
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.text`, { origin: "left", interval: 200 });
    sr.reveal(`.imgBanner_home`, { origin: "right", interval: 200 });
    sr.reveal(`.instagram`, { origin: "bottom", interval: 200 });
    sr.reveal(`.note_imgs`, { origin: "top", interval: 200 });
    sr.reveal(`.item`, { origin: "top", interval: 200 });
  }, []);

  return (
    <>
      <div className="home">
        <div className="content">
          <div className="items">
            <div className="text">
              <h1>
                Đón xuân <br /> COLLECTION
              </h1>
              <button>
                Đến ngay
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
              <div className="year">2025</div>
            </div>
          </div>
          {/*  */}
          <div className="img imgBanner_home">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/1x1_menu.webp
"
            />
          </div>
          {/*  */}
        </div>
      </div>

      <div className="widget">
        <div className="line">
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
        </div>
      </div>
      {/* products */}
      <div className="home_products">
        <div className="home_title">
          <h5>SẢN PHẨM BÁN CHẠY</h5>
          <p>
            Bộ sưu tập mùa Xuân 2025 đa dạng mẫu mã, mua ngay nhận ưu đã lớn
          </p>
        </div>
        <div className="home_list_products">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imgUrl} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price} VNĐ</p>
              <button onClick={handleSeeMore}>Xem thêm</button>
            </div>
          ))}
        </div>
      </div>
      {/* Home_about */}
      <div className="home_about">
        <div className="title">
          <h5>VỀ LOGO</h5>
          <p>Đón đầu xu hướng, bức phá khỏi vùng an toàn</p>
        </div>
        <div className="about_items">
          <div className="item">
            <SquareIcon color="black" className="icon rotate" />
            <b>TOP TRENDING</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <CircleIcon color="black" className="icon" />
            <b>SẢN PHẨM CHẤT LƯỢNG</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <SquareOutlinedIcon color="black" className="icon" />
            <b>MIỄN PHÍ VẬN CHUYỂN</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <Brightness7Icon color="black" className="icon" />
            <b>HỖ TRỢ ONLINE</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
        </div>
        {/*  */}
        <div className="home_note">
          <div className="chat_icon">
            <QuestionAnswerIcon fontSize="500" />
          </div>
          <div className="stars">
            <StarBorderPurple500Icon />
            <StarBorderPurple500Icon />
            <StarBorderPurple500Icon />
            <StarBorderPurple500Icon />
            <StarBorderPurple500Icon />
          </div>
          <div className="note">
            <p>
              TÔI LUÔN LUÔN TÌM THẤY VẺ ĐẸP TRONG NHỮNG THỨ KỲ LẠ VÀ KHÔNG HOÀN
              HẢO. CHÚNG LUÔN THÚ VỊ HƠN NHIỀU
            </p>
          </div>
          <div className="CEO_name">NGUYỄN HÙNG</div>
          <div className="sub_name">Founder & CEO</div>
          <div className="note_imgs">
            <p>COLLECTION</p>
            <img src="/FashionShopV2/900x420_img_2.avif" alt="" />
            <b>2025</b>
          </div>
          <div className="brands">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/logoBrands/Alexander-McQueen.png
"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/logoBrands/Balmain%20Paris.png
"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/logoBrands/Burberry%20Group.png
"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/logoBrands/hermes.png
"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/main/public/logoBrands/prada.png
"
              alt=""
            />
          </div>
        </div>
        <div className="instagram">
          <div className="box">
            <div className="ig_logo">
              <InstagramIcon />
            </div>
            <div className="ig_img">
              <img
                src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/public/ig_imgs/ig_img_1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box">
            <div className="ig_logo">
              <InstagramIcon />
            </div>
            <div className="ig_img">
              <img
                src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/public/ig_imgs/ig_img_2.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box">
            <div className="ig_logo">
              <InstagramIcon />
            </div>
            <div className="ig_img">
              <img
                src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/public/ig_imgs/ig_img_3.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box">
            <div className="ig_logo">
              <InstagramIcon />
            </div>
            <div className="ig_img">
              <img
                src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/public/ig_imgs/ig_img_4.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box">
            <div className="ig_logo">
              <InstagramIcon />
            </div>
            <div className="ig_img">
              <img
                src="https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/public/ig_imgs/ig_img_5.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
