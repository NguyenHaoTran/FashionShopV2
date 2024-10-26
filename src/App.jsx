import "./App.scss";
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
import Account from "./components/LoginSignin/Account.jsx";
import { CartProvider } from "./components/cart/CartContext.jsx";

function App() {
  return (
    <CartProvider> {/* Bọc toàn bộ ứng dụng với CartProvider */}
      <Router>
        <BlackLine />
        <Header />
        <Routes>
          <Route path="/FashionShopV2/" element={<Home />} />
          <Route path="/FashionShopV2/about" element={<About />} />
          <Route path="/FashionShopV2/products" element={<Products />} />
          <Route path="/FashionShopV2/products/:id" element={<ProductDetail />} /> {/* Route chi tiết sản phẩm */}
          <Route path="/FashionShopV2/news" element={<News />} />
          <Route path="/FashionShopV2/contacts" element={<Contacts />} />
          <Route path="/FashionShopV2/account" element={<Account />} /> {/* Route cho LS_In */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
