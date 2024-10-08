import { useState } from 'react';
import './filterBar.scss';

const Dropdown = ({ label, options, selectedOption, onSelect }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setOpen(false); // Đóng menu sau khi chọn
  };

  return (
    <div className={`dropdown ${open ? 'open' : ''}`}>
      <button onClick={toggleDropdown}>{selectedOption || label}</button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  const handleFilter = () => {
    onFilter({
      category,
      color,
      size,
      priceRange,
    });
  };

  const handleClearFilters = () => {
    setCategory('');
    setColor('');
    setSize('');
    setPriceRange([0, 2000000]);
    onFilter({
      category: '',
      color: '',
      size: '',
      priceRange: [0, 2000000],
    });
  };

  return (
    <div className="filter-bar">
      <Dropdown
        label="Chọn danh mục"
        options={['Đồ nam', 'Giày', 'Túi', 'Phụ kiện']}
        selectedOption={category}
        onSelect={(option) => setCategory(option)}
      />
      <Dropdown
        label="Chọn màu sắc"
        options={['Xanh', 'Trắng', 'Đen', 'Xám', 'Vàng']}
        selectedOption={color}
        onSelect={(option) => setColor(option)}
      />
      <Dropdown
        label="Chọn kích thước"
        options={['S', 'M', 'L']}
        selectedOption={size}
        onSelect={(option) => setSize(option)}
      />
      {/* <input
        type="range"
        min="0"
        max="2000000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
      /> */}
      {/* <span>{priceRange[1]} VNĐ</span> */}
      <button onClick={handleFilter}>Lọc</button>
      <button className="clear-filters" onClick={handleClearFilters}>
        Xoá bộ lọc
      </button>
    </div>
  );
};

export default FilterBar;
