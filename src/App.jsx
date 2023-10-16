import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AsyncAwaitProducts from "./components/AsyncAwaitProducts";

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
