import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/CategoryShop/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ItemDetailContainer from "./pages/CategoryShop/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Main from "./components/Main";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [quantityCart, setQuantityCart] = useState("");

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar onOpenCart={handleOpenCart} >
          <CartWidget isCartOpen={isCartOpen} onIsCartOpen={handleOpenCart} /> 
        </NavBar>
        <Routes>
          <Route path="/" element={<Main isCartOpen={isCartOpen}><Home /> </Main>} />
          <Route path="/about-us" element={<Main isCartOpen={isCartOpen}><AboutUs /> </Main>} />
          <Route path="/tienda/:idcategory" element={<Main isCartOpen={isCartOpen}><Category /> </Main>}  />
          <Route path="/product/:id" element={<Main isCartOpen={isCartOpen}><ItemDetailContainer /> </Main>} />
          <Route path="/contact-us" element={<Main isCartOpen={isCartOpen}><ContactUs /> </Main>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
