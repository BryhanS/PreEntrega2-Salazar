import { useState, useEffect } from "react";

function AsyncAwaitProducts() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <h1>Catalogo de Productos</h1>
      <div id="shop" className="card-container">
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

function Product({ item }) {
  return (
    <div className="card-body">
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <span>{item.nombre}</span>
      <button type="button">agregar al carrito</button>
    </div>
  );
}
export default AsyncAwaitProducts;
