import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/CategoryShop/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantityCart, setQuantityCart] = useState("");

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar onCartOpen={handleOpenCart} onQuantityCart={quantityCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
