import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import products from "./pages/Products.jsx";
import News from "./pages/News.jsx";
import Contacts from "./pages/Contacts.jsx";
//
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
//
import Products from "./pages/Products.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
