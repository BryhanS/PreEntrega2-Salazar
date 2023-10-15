import "./App.scss";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import AsyncAwaitProducts from "./components/AsyncAwaitProducts/AsyncAwaitProducts";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="product-section">
          <AsyncAwaitProducts />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
