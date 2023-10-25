import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/CategoryShop/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ItemDetailContainer from "./pages/CategoryShop/ItemDetailContainer";

function App() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [quantityCart, setQuantityCart] = useState("");

  // function handleOpenCart() {
  //   setIsCartOpen((isCartOpen) => !isCartOpen);
  // }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tienda/:idcategory" element={<Category />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
