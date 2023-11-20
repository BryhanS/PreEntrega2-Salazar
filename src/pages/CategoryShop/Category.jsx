import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/config";
import { collection, getDocs, query, where } from "firebase/firestore";

// import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemListContainer from "./ItemListContainer";

const Category = () => {
  const [products, setProducts] = useState([]);

  const { idcategory } = useParams();

  // useEffect(() => {
  //   const funtionProducts =
  //     idcategory === "all" ? getProducts : getProductsByCategory;

  //   funtionProducts(idcategory).then((res) => setProducts(res));
  // }, [idcategory]);

  useEffect(() => {
    const funtionProducts =
      idcategory === "all"
        ? collection(db, "products")
        : query(
            collection(db, "products"),
            where("category", "==", idcategory)
          );

    getDocs(funtionProducts).then((res) => {
      const newProducts = res.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProducts(newProducts);
    });
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

// useEffect(() => {
//   const misProductos = idCategoria
//     ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
//     : collection(db, "productos");

//   getDocs(misProductos)
//     .then((res) => {
//       const nuevosProductos = res.docs.map((doc) => {
//         const data = doc.data();
//         return { id: doc.id, ...data };
//       });
//       setProductos(nuevosProductos);
//     })
//     .catch((error) => console.log(error));
// }, [idCategoria]);
