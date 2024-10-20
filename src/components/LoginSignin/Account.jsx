import React, { useState } from 'react';
import './account.scss'; // Import SCSS file

const LS_In = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu hoặc gửi đến backend để xử lý đăng nhập/đăng ký
    const response = await fetch('API_URL', {
      method: isLogin ? 'POST' : 'PUT', // Thay đổi thành POST cho đăng ký
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (data.success) {
      setMessage('Thành công!');
    } else {
      setMessage('Đã xảy ra lỗi!');
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="title">{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Tên đăng nhập"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-btn">
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
          </button>
        </form>
        <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
        </p>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default LS_In;
