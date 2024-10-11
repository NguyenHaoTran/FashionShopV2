import "./search.scss"; // Đảm bảo rằng CSS tương ứng cũng được cập nhật
// import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
// import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

const Search = ({ isVisible, onClose }) => {
  return (
    <div className={`search-modal ${isVisible ? "visible" : "hidden"}`}>
      <div className="modal-content">
        <div className="search-box">
          <div className="input">
            <input type="text" placeholder="Tìm kiếm ..." />
            <SearchOutlinedIcon className="search-icon" />
          </div>
          <div className="export">
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
