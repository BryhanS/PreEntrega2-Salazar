import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemListContainer from "./ItemListContainer";

const Category = () => {
  const [products, setProducts] = useState([]);

  const { idcategory } = useParams();

  useEffect(() => {
    const funtionProducts =
      idcategory === "all" ? getProducts : getProductsByCategory;

    funtionProducts(idcategory).then((res) => setProducts(res));
  }, [idcategory]);

  return (
    <main>
      <section className="product-section">
        <ItemListContainer onProducts={products}>
          {idcategory === "all"
            ? "todo nuestro catalogo"
            : `nuestro catalogo ${idcategory}`}
        </ItemListContainer>
      </section>
    </main>
  );
};

export default Category;
