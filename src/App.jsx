import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/CategoryShop/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ItemDetailContainer from "./pages/CategoryShop/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Main from "./components/Main";
import { OpenCartProvider } from "./context/OpenCartContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <OpenCartProvider>
            <NavBar>
              <CartWidget />
            </NavBar>
            <Routes>
              <Route
                path="/"
                element={
                  <Main>
                    <Home />
                  </Main>
                }
              />
              <Route
                path="/about-us"
                element={
                  <Main>
                    <AboutUs />
                  </Main>
                }
              />
              <Route
                path="/tienda/:idcategory"
                element={
                  <Main>
                    <Category />
                  </Main>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <Main>
                    <ItemDetailContainer />
                  </Main>
                }
              />
              <Route
                path="/contact-us"
                element={
                  <Main>
                    <ContactUs />
                  </Main>
                }
              />
            </Routes>
            <Footer />
          </OpenCartProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
