import React, { useState, useEffect } from "react";
import "./UserProfile.scss";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    // Fetch dữ liệu người dùng từ file JSON
    fetch(
      "https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/src/Data/UserProfile.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi yêu cầu cập nhật thông tin người dùng (nếu có backend)
    console.log("Updated User Data:", formData);
    setUserData(formData); // Cập nhật dữ liệu người dùng trong trạng thái
    setIsEditing(false);
  };

  if (!userData) {
    return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  }

  return (
    <div className="user-profile">
      <div className="data">
        <h2>Thông Tin Người Dùng</h2>
        <div className="avt">
          <img src={userData.avatar} alt={`${userData.name}'s avatar`} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số Điện Thoại:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>
          <div className="form-actions">
            {!isEditing ? (
              <button type="button" onClick={handleEdit}>
                Chỉnh Sửa
              </button>
            ) : (
              <>
                <button type="submit">Lưu Thay Đổi</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Hủy
                </button>
              </>
            )}
          </div>
        </form>
      </div>
      <div className="orders-data">
        {userData.orders.length > 0 ? (
          <div className="orders">
            {userData.orders.map((order) => (
              <div key={order.orderId} className="order">
                <h3>Đơn Hàng ID: {order.orderId}</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      <b>{item.product}</b> - <b>Số Lượng:</b> {item.quantity} - <b>Giá:</b>{" "}
                      {item.price.toLocaleString()} VNĐ
                    </li>
                  ))}
                </ul>
                <div className="line"></div>
                <p><b>Tình Trạng Thanh Toán: </b> {order.paymentStatus}</p>
                <p><b>Tình Trạng Giao Hàng: </b>{order.deliveryStatus}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Không có đơn hàng nào.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
