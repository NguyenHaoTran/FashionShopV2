import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductsDetail.jsx"; // Import component chi tiết sản phẩm
import News from "./pages/News.jsx";
import Contacts from "./pages/Contacts.jsx";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import BlackLine from "./header/blackLine/BlackLine.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeCartItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <BlackLine />
      <Header
        cartItems={cartItems}
        updateCartItem={updateCartItem}
        removeCartItem={removeCartItem}
        clearCart={clearCart}
      />
      <Routes>
        <Route path="/FashionShopV2/" element={<Home />} />
        <Route path="/FashionShopV2/about" element={<About />} />
        <Route path="/FashionShopV2/products" element={<Products />} />
        <Route path="/FashionShopV2/products/:id" element={<ProductDetail />} /> {/* Route chi tiết sản phẩm */}
        <Route path="/FashionShopV2/news" element={<News />} />
        <Route path="/FashionShopV2/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
