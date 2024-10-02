import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="col_1">
          <h3>LOGO</h3>
          <p>
            Nhận ưu đãi, thông báo sản phẩm mới và hơn thế nữa. Bằng cách đăng
            ký, bạn đồng ý với Chính sách quyền riêng tư của chúng tôi.
          </p>
        </div>
        <div className="col_23">
          <div className="col_2">
            <ul>
              <p>LIÊN KẾT</p>
              <li>Trang chủ</li>
              <li>Liên hệ</li>
              <li>Tin tức</li>
              <li>Về chúng tôi</li>
            </ul>
          </div>
          <div className="col_3">
            <ul>
              <p>HỖ TRỢ</p>
              <li>Tư vấn online</li>
              <li>Vận chuyển</li>
              <li>Thanh toán</li>
              <li>Quy chế hoạt động</li>
            </ul>
          </div>
        </div>

        <div className="map">
          <p>MAP</p>
        </div>
      </div>
      <div className="footer_end">
        <p>
          Thiết kế và lập trình bởi <b>Ng.Hao.t/Website</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
