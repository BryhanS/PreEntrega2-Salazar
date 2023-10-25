/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncmock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((resolve) => setProduct(resolve));
  }, [id]);

  return (
    <main>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
