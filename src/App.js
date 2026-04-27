import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTES FIXOS
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

// PÁGINAS
import Home from "./pages/Home/Home";
import About from "./pages/Home/Section2";
import Menu from "./pages/Home/Section3";
import Shop from "./pages/Home/Section5";
import Blog from "./pages/Home/Section6";
import Contact from "./pages/Home/Section7";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;