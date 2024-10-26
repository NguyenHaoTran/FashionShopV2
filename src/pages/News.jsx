import "./news.scss";
import { useState, useEffect } from "react";

export const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State để lưu trữ danh mục được chọn
  const [selectedItem, setSelectedItem] = useState(null); // State để lưu trữ bài viết được chọn
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State để quản lý hiển thị popup

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("https://raw.githubusercontent.com/NguyenHaoTran/JSON_Files/refs/heads/main/News_Fashion.json")
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // dành cho phần filter ở category nếu cần (dành cho "bài viết mới nhất")
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Hàm xử lý khi chọn danh mục
  const filteredNewsData = selectedCategory
    ? newsData.filter((item) => item.category === selectedCategory)
    : newsData;

  // Hàm mở popup
  const openPopup = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
    document.body.classList.add("no-scroll");
  };

  // Hàm đóng popup
  const closePopup = () => {
    setSelectedItem(null);
    setIsPopupOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="News">
      <div className="banner">
        <div className="selection">
          <a href="/">TRANG CHỦ</a>
          <span>|</span>
          <a href="/products">TIN TỨC</a>
        </div>
        <p className="p_banner">TIN TỨC</p>
      </div>
      <div className="news_contents">
        {/* content_Items */}
        <div className="contents">
          {/* item */}
          {filteredNewsData.map((item) => (
            <div
              key={item.id}
              className="news-item"
              onClick={() => openPopup(item)}
            >
              <img src={item.imgUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="end">
                LOGO
              <div className="date">{item.Date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="sideBar">
          <div className="searchBar"></div>
          <div className="category">
            <h3>CHUYÊN MỤC</h3>
            <div className="filterButtons">
              <button
                className={selectedCategory === null ? "active" : ""}
                onClick={() => handleCategorySelect(null)}
              >
                Tất cả
              </button>
              <button
                className={selectedCategory === "Fashion" ? "active" : ""}
                onClick={() => handleCategorySelect("Fashion")}
              >
                Fashion
              </button>
              <button
                className={selectedCategory === "Life Style" ? "active" : ""}
                onClick={() => handleCategorySelect("Life Style")}
              >
                Life Style
              </button>
              <button
                className={selectedCategory === "News" ? "active" : ""}
                onClick={() => handleCategorySelect("News")}
              >
                News
              </button>
              <button
                className={selectedCategory === "Travel" ? "active" : ""}
                onClick={() => handleCategorySelect("Travel")}
              >
                Travel
              </button>
              <button
                className={selectedCategory === "Trending" ? "active" : ""}
                onClick={() => handleCategorySelect("Trending")}
              >
                Trending
              </button>
            </div>
          </div>
          <div className="newBlog">
            <h3>BÀI VIẾT MỚI NHẤT</h3>
            {/* items */}
            {newsData.map((item) => (
              <div
                key={item.id}
                className="item"
                onClick={() => openPopup(item)}
              >
                <div className="imgs">
                  <img src={item.imgUrl} alt="itemImg" />
                </div>
                <div className="texts">
                  <p className="date_time">{item.Date}</p>
                  <b>{item.name}</b>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-button" onClick={closePopup}>
              &times;
            </button> */}
            {selectedItem && (
              <div className="popup-content-item">
                <h2>{selectedItem.name}</h2>
                <img src={selectedItem.imgUrl} alt={selectedItem.name} />
                <p>{selectedItem.content}</p>
                <p>{selectedItem.Date}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
