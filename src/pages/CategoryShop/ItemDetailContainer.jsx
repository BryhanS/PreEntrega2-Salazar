/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/config";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   getProduct(id).then((resolve) => setProduct(resolve));
  // }, [id]);

  useEffect(() => {
    const funtionProducts = doc(db, "products", id);
    getDoc(funtionProducts).then((res) => {
      const data = res.data();
      const newProduct = { id: res.id, ...data };
      setProduct(newProduct);
    });
  }, [id]);

  return (
    <main>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
