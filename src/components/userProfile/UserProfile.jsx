import React, { useState, useEffect } from 'react';
import './UserProfile.scss';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    // Fetch dữ liệu người dùng từ file JSON
    fetch('https://raw.githubusercontent.com/NguyenHaoTran/FashionShopV2/refs/heads/main/src/Data/UserProfile.json')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((error) => console.error('Error fetching user data:', error));
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
    console.log('Updated User Data:', formData);
    setUserData(formData); // Cập nhật dữ liệu người dùng trong trạng thái
    setIsEditing(false);
  };

  if (!userData) {
    return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  }

  return (
    <div className='user-profile'>
<div className="data">
      <h2>Thông Tin Người Dùng</h2>
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
        <div className="form-actions">
          {!isEditing ? (
            <button type="button" onClick={handleEdit}>Chỉnh Sửa</button>
          ) : (
            <>
              <button type="submit">Lưu Thay Đổi</button>
              <button type="button" onClick={() => setIsEditing(false)}>Hủy</button>
            </>
          )}
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default UserProfile;
