import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const AsyncAwaitProducts = () => {
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
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
export default AsyncAwaitProducts;

