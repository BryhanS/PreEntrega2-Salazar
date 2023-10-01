import "./App.scss";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <ItemListContainer content="Hola Empazamos un nuevo proyecto con CoderHouse" />
      </main>
      <Footer />
    </>
  );
}

export default App;
