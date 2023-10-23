import { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import { getProducts } from "../../asyncmock";

const Category = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productListArray, setProductListArray] = useState([]);
  const [quantityCart, setQuantityCart] = useState("");

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  useEffect(() => {
    getProducts().then((result) => setProducts(result));
  }, []);

  function handleSelectionProduct(item) {
    productListArray.find((product) => product.id === item.id)
      ? null
      : setProductListArray((arrayList) => [...arrayList, item]);
    if (!isCartOpen) setIsCartOpen(true);
    setQuantityCart(productListArray.length + 1);
  }

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }
  return (
    <main>
      <section className="product-section">
        <ItemListContainer
          onProducts={products}
          onSelectionProduct={handleSelectionProduct}
        />
        {isCartOpen && <CartBody onCartList={productListArray} />}
      </section>
    </main>
  );
};

export default Category;
