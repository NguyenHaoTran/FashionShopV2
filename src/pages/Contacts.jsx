import "./contact.scss";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.texts`, { origin: "left", interval: 200 });
    sr.reveal(`.img`, { origin: "right", interval: 200 });
    sr.reveal(`.diaChi`, { origin: "bottom", interval: 200 });
  }, []);

  return (
    <div className="Contact_Main">
      <div className="contact">
        <div className="texts">
          <div className="title">
            <h3>Vị trí cửa hàng</h3>
            <p>Hệ thống cửa hàng của LOGO trên địa bàn Thành phố Hồ Chí Minh</p>
          </div>
          <div className="diaChi">
            <div className="diaChi_Item">
              <b>Q. Tân Bình</b>
              <p>18, Bình Hưng Hoà</p>
              <p>0523874839</p>
            </div>
            <div className="diaChi_Item">
              <b>Quận 3</b>
              <p>356 Võ Thị Sáu</p>
              <p>0914914710</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src="/FashionShopV2/1x1_img_1.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
