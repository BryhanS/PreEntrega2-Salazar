/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getProduct } from "../../asyncmock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct("2").then((resolve) => setProduct(resolve));
  }, []);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
