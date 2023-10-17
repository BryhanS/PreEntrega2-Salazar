import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AsyncAwaitProducts from "./components/AsyncAwaitProducts";
import CartBody from "./components/CartBody";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <Header onCartOpen={handleOpenCart} />
      <main>
        <section className="product-section">
          <AsyncAwaitProducts />
          {isCartOpen && <CartBody />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
