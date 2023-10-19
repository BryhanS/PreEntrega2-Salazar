import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductBody from "./components/ProductBody";
import CartBody from "./components/CartBody";
import { useState, useEffect } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productListArray, setProductListArray] = useState([])

  useEffect(() => {
    try {
      const askProducts = async () => {
        const answer = await fetch("/src/db/products.json");
        const data = await answer.json();
        setProducts(data);
      };
      askProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleSelectionProduct(item){
    console.log(item)

    setProductListArray((productListArray) => [...productListArray,item])
    console.log(productListArray)
  }
  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  return (
    <>
      <Header onCartOpen={handleOpenCart} />
      <main>
        <section className="product-section">
          <ProductBody onProducts={products} onSelectionProduct={handleSelectionProduct} />
          {isCartOpen && <CartBody onCartList={productListArray} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
