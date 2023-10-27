import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemListContainer from "./ItemListContainer";

const Category = () => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  // const [productListArray, setProductListArray] = useState([]);

  const { idcategory } = useParams();
  // function handleOpenCart() {
  //   setIsCartOpen((isCartOpen) => !isCartOpen);
  // }

  // function handleOpenCart() {
  //   setIsCartOpen((isCartOpen) => !isCartOpen);
  // }
  useEffect(() => {
    const funtionProducts =
      idcategory === "all" ? getProducts : getProductsByCategory;

    funtionProducts(idcategory).then((res) => setProducts(res));
  }, [idcategory]);

  // function handleSelectionProduct(item) {
  //   productListArray.find((product) => product.id === item.id)
  //     ? null
  //     : setProductListArray((arrayList) => [...arrayList, item]);
  //   if (!isCartOpen) setIsCartOpen(true);
  // }

  return (
    <main>
      <section className="product-section">
        <ItemListContainer onProducts={products}>
          {idcategory === "all"
            ? "todo nuestro catalogo"
            : `nuestro catalogo ${idcategory}`}
        </ItemListContainer>

        {/* {isCartOpen && <CartBody onCartList={productListArray} />} */}
      </section>
    </main>
  );
};

export default Category;
